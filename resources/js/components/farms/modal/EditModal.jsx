import React from 'react'
import EditFarmForm from "../form/EditFarmForm.jsx";

const EditModal = (props) => {
    return (
        <div className="modal fade"
             id={`editModal${props.modalId}`}
             tabIndex="-1"
             aria-labelledby="editModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <EditFarmForm editId={props.modalId} editData={props.data} />
                </div>
            </div>
        </div>
    )
}

export default EditModal
