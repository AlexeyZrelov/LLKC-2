import React from 'react'
import AddFarmForm from "../form/AddFarmForm";

const AddModal = () => {

    return (
        <div className="py-3">
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
            >
                + Add new Farm
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

export default AddModal
