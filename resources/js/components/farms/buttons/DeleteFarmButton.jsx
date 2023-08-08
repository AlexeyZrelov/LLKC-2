import React from 'react';
import {Trash} from "react-bootstrap-icons";
import classes from "../ActionButtons.module.css";
import {toast} from "react-toastify";
import axios from "axios";

const DeleteFarmButton = (props) => {

    const deleteFarm = (farm) => {
        axios.delete('/farm/delete/'+farm).then(() => {
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

export default DeleteFarmButton
