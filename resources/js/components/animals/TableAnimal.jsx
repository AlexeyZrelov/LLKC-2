import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom/client";
import axios from "axios";
import TableAnimalRow from "./TableAnimalRow";
import {ToastContainer} from "react-toastify";
import AddModalAnimal from "./modal/AddModalAnimal.jsx";

const TableAnimal = () => {

    const [animals, setAnimals] = useState([]);

    const element = document.getElementById('animal');
    let farmId = element.dataset;
    // let farmId = 30;

    const getAnimals = (id) => {
        axios.post('/animal/show', {
            farmId: farmId
        }).then((response) => {
            setAnimals(response.data);
        })
    }

    useEffect(()=>{
        // initialize datatable
        $(document).ready(function () {
            setTimeout(function(){
                $('#animalTable').DataTable({
                    scrollX: true,
                    destroy: true
                });
            } ,1000);
        });

        getAnimals(farmId);
    },[])

    return (
        <div className="container mt-2">
            <ToastContainer />
            <AddModalAnimal count={animals.length}/>
            <table id="animalTable" className="table table-striped table-bordered w-100">
                <thead>
                <tr>
                    <th>Order</th>
                    <th>ID</th>
                    <th>Animal number</th>
                    <th>Type name</th>
                    <th>Years</th>
                    <th width='80'>Actions</th>
                </tr>
                </thead>
                <tbody>

                {animals && animals.map(function (row, i){
                    return <TableAnimalRow key={i} index={i+1} data={row} />
                })}

                </tbody>
                <tfoot className="mb-1">
                <tr></tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TableAnimal

if (document.getElementById('animal')) {
    const Index = ReactDOM.createRoot(document.getElementById("animal"));

    Index.render(
        <React.StrictMode>
            <TableAnimal/>
        </React.StrictMode>
    )
}
