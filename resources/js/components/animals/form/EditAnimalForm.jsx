import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import "./AnimalForm.module.css";
import { toast } from 'react-toastify';

const EditAnimalForm = (props) => {
    const animalId = props.editId;
    const {number, name, age} = props.editData;
    const {
        register,
        handleSubmit, watch,
        formState: { errors } ,
        setValue,
    } = useForm();

    useEffect(() => {
        setValue("number", number)
        setValue("name", name)
        setValue("age", age)
        setValue("hidden", animalId)
    }, [number, name, age, animalId]);

    function onSubmit(data) {
        axios.post('/animal/update', {
            animalId: data.hidden,
            number: data.number,
            name: data.name,
            age: data.age
        }).then(() => {
            toast.success("Animal updated successfully", {
                position: toast.POSITION.TOP_RIGHT
            });

            setTimeout(() => {
                location.reload();
            }, 2000)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("hidden")} type="hidden" />
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="editModalLabel">Edit animal</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label>Animal number:</label>
                    <input className="w-100 form-control"
                           onChange={e => setValue(e.target.name, e.target.value)}
                           {...register("number", { required: true })}
                           aria-invalid={errors.number ? "true" : "false"}
                    />
                    {errors.number?.type === 'required' && <p role="alert">Animal number is required</p>}
                </div>
                <div className="mb-3">
                    <label>Type name:</label>
                    <input className="w-100 form-control"
                           onChange={e => setValue(e.target.name, e.target.value)}
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
                           onChange={e => setValue(e.target.name, e.target.value)}
                           {...register("age", {required: "Website is required"})}
                           aria-invalid={errors.age ? "true" : "false"}
                    />
                    {errors.age && <p role="alert">{errors.age?.message}</p>}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>

    );
}

export default EditAnimalForm
