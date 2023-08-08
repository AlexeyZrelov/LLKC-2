import React from 'react'
import EditAnimalForm from "../form/EditAnimalForm.jsx";

const EditModalAnimal = (props) => {
    return (
        <div className="modal fade"
             id={`editModal${props.modalId}`}
             tabIndex="-1"
             aria-labelledby="editModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <EditAnimalForm editId={props.modalId} editData={props.data} />
                </div>
            </div>
        </div>
    )
}

export default EditModalAnimal
