import React, {useState} from 'react';
import {PencilSquare} from "react-bootstrap-icons";
import classes from "../../farms/ActionButtons.module.css";
import EditModalAnimal from "../modal/EditModalAnimal.jsx";
import axios from "axios";

const EditAnimalButton = (props) => {

    const [dataAnimal, setDataAnimal] = useState([]);

    const getAnimalDetails = (id) => {
        axios.post('/animal/edit', {
            animalId: id
        }).then((response) => {
            setDataAnimal(response.data);
        })
    }

    return (
        <>
            <button type="button"
                    className="btn btn-link p-1"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${props.eachRowId}`}
                    onClick={() => getAnimalDetails(props.eachRowId)}
            >
                <PencilSquare className={classes.actions} />
            </button>
            <EditModalAnimal modalId={props.eachRowId} data={dataAnimal}/>
        </>
    )
}

export default EditAnimalButton
