import React from 'react';
import {useForm} from "react-hook-form";
import "./FarmForm.module.css";
import { toast } from 'react-toastify';

const AddFarmForm = () => {
    const {
        register,
        handleSubmit, watch,
        formState: { errors } ,
    } = useForm();

    function onSubmit(data) {
        axios.post('/farm/add', {
            farm_name: data.farm_name,
            email: data.email,
            website: data.website
        }).then(() => {
            toast.success("Farm saved successfully", {
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
                <h1 className="modal-title fs-5" id="addModalLabel">Add new farm</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label>Farm name:</label>
                    <input className="w-100 form-control"
                           {...register("farm_name", { required: true })}
                           aria-invalid={errors.farm_name ? "true" : "false"}
                    />
                    {errors.farm_name?.type === 'required' && <p role="alert">Farm name is required</p>}
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input className="w-100 form-control"
                           {...register("email", {
                               required: "Email Address is required",
                               validate: {
                                   matchPattern: (v) =>
                                       /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
                                       "Email address must be a valid",
                               },
                           })}
                           aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </div>
                <div className="mb-3">
                    <label>Website:</label>
                    <input className="w-100 form-control"
                           {...register("website", { required: "Website is required" })}
                           aria-invalid={errors.website ? "true" : "false"}
                    />
                    {errors.website && <p role="alert">{errors.website?.message}</p>}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>

    );
}

export default AddFarmForm
