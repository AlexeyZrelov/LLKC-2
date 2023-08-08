import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import TableFarmRow from "./TableFarmRow";
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"
import AddModal from "./modal/AddModal";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function TableFarm() {

    const [farms, setFarms] = useState([]);

    const getFarmsList = async () => {
        await axios.get('/farm/list')
            .then((response) => setFarms(response.data))
            // .then(function (response) {
            //     setFarms(response.data);
            // });
    }

    useEffect(()=>{
        // initialize datatable
        $(document).ready(function () {
            setTimeout(function(){
                $('#farmTable').DataTable({
                    scrollX: true,
                    destroy: true
                });
            } ,1000);
        });

        getFarmsList();
    },[])


    return (
        <div className="container mt-2">
            <ToastContainer />
            <AddModal/>
            <table id="farmTable" className="table table-striped table-bordered w-100">
                <thead>
                <tr>
                    <th>Order</th>
                    <th>ID</th>
                    <th>Farm name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>qty.</th>
                    <th width='80'>Actions</th>
                </tr>
                </thead>
                <tbody>

                {farms && farms.map(function (row, i){
                    return <TableFarmRow key={i} index={i+1} data={row} />
                })}

                </tbody>
                <tfoot className="mb-1">
                    <tr></tr>
                </tfoot>
            </table>
        </div>
    );
}

export default TableFarm;

if (document.getElementById('farms')) {
    const Index = ReactDOM.createRoot(document.getElementById("farms"));

    Index.render(
        <React.StrictMode>
            <TableFarm/>
        </React.StrictMode>
    )
}
