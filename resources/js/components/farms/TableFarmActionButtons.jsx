import React, {useEffect, useState} from 'react'
import { PencilSquare } from 'react-bootstrap-icons'
import { Eye } from 'react-bootstrap-icons'
import classes from './ActionButtons.module.css'
import EditModal from "./modal/EditModal.jsx";
import axios from "axios";
import DeleteFarmButton from "./buttons/DeleteFarmButton";

const TableFarmActionButtons = (props) => {

    const [dataFarm, setDataFarm] = useState([]);

    const getFarmDetails = (id) => {
        axios.post('/farm/details', {
            farmId: id
        }).then((response) => {
            setDataFarm(response.data);
        })
    }

    return (
        <>
            <a href={"/animal/" + props.eachRowId}
               className="p-1"
            >
                <Eye className={classes.actions} />
            </a>
            <button type="button"
                    className="btn btn-link p-1"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${props.eachRowId}`}
                    onClick={() => getFarmDetails(props.eachRowId)}
            >
                <PencilSquare className={classes.actions} />
            </button>
            <EditModal modalId={props.eachRowId} data={dataFarm}/>

            <DeleteFarmButton rowId={props.eachRowId} />
        </>
    )
}

export default TableFarmActionButtons
