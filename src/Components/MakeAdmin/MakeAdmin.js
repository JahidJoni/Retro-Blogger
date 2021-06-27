import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar'

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }

        fetch('https://hidden-shelf-25964.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                alert("Admin Added Successfully!")
                window.location.reload(false);
            })

    }

return (
    <div className="row mt-3">
        <div className="col-md-2">
            <SideBar></SideBar>
        </div>
        <div className="col-md-10 mt-4">
            <div className="p-5 ms-4">
            <h3 style={{ color: '#0bff96' }}>Give All Information About New Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="form-label">Name</p>
                <input name="name" className="form-control w-50" ref={register} /> <br />
                <p className="form-label">Email</p>
                <input name="email" className="form-control w-50" ref={register} /> <br />
                <input type="submit" className="btn btn-info btn-sm px-5 mt-5"/>
            </form>
            </div>
        </div>
    </div>
);
};

export default MakeAdmin;