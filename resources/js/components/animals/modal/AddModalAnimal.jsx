import React from 'react'
import AddFarmForm from "../form/AddAnimalForm.jsx";

const AddModalAnimal = (props) => {
    const count = props.count;

    return (
        <div className="py-3">
            <button
                type="button"
                className="btn btn-success btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
                disabled={count >= 3}
            >
                + Add new Animal
            </button>

            <div className="modal fade"
                 id="addModal"
                 tabIndex="-1"
                 aria-labelledby="addModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <AddFarmForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModalAnimal
