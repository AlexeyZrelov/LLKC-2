import React from 'react';
import {Trash} from "react-bootstrap-icons";
import classes from "../../farms/ActionButtons.module.css";
import {toast} from "react-toastify";
import axios from "axios";
import ReactDOM from "react-dom/client";

const DeleteAnimalButton = (props) => {

    const deleteFarm = (animal) => {
        axios.delete('/animal/delete/'+animal).then(() => {
            // toast.success("Farm deleted successfully", {
            toast.error("Farm deleted successfully", {
                position: toast.POSITION.TOP_RIGHT
            });

            setTimeout(() => {
                location.reload();
            }, 2000)
        })
    }

    return (
        <>
            <button type="button"
                className="btn btn-link p-1"
                onClick={()=>deleteFarm(props.rowId)}
            >
                <Trash className={classes.actions} />
            </button>
        </>
    )
}

export default DeleteAnimalButton

if (document.getElementById('deleteAnimal')) {
    const Index = ReactDOM.createRoot(document.getElementById("deleteAnimal"));

    Index.render(
        <React.StrictMode>
            <DeleteAnimalButton/>
        </React.StrictMode>
    )
}
