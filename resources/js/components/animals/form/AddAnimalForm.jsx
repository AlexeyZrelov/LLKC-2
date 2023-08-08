import React from 'react';
import {useForm} from "react-hook-form";
import "./AnimalForm.module.css";
import { toast } from 'react-toastify';

const AddAnimalForm = () => {
    const element = document.getElementById('animal');
    const {farmId} = element.dataset;

    const {
        register,
        handleSubmit, watch,
        formState: { errors } ,
    } = useForm();

    function onSubmit(data) {
        axios.post('/animal/add', {
            number: data.number,
            name: data.name,
            age: data.age,
            farm_id: farmId
        }).then(() => {
            toast.success("Animal added successfully", {
                position: toast.POSITION.TOP_RIGHT
            });

            setTimeout(() => {
                location.reload();
            }, 2000)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addModalLabel">Add new Animal</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label>Animal number:</label>
                    <input className="w-100 form-control"
                           {...register("number", { required: true })}
                           aria-invalid={errors.number ? "true" : "false"}
                    />
                    {errors.number?.type === 'required' && <p role="alert">Animal number is required</p>}
                </div>
                <div className="mb-3">
                    <label>Type name:</label>
                    <input className="w-100 form-control"
                           {...register("name", {
                               required: "Type name is required",
                           })}
                           aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p role="alert">{errors.name?.message}</p>}
                </div>
                <div className="mb-3">
                    <label>Years:</label>
                    <input className="w-100 form-control"
                           {...register("age", { required: "Years is required" })}
                           aria-invalid={errors.age ? "true" : "false"}
                    />
                    {errors.age && <p role="alert">{errors.age?.message}</p>}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>

    );
}

export default AddAnimalForm
