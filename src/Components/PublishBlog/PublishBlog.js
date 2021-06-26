import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import SideBar from '../SideBar/SideBar';

const PublishBlog = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            content: data.content,
            url: data.url,
            image: imageURL
        }
        console.log(serviceData);

        fetch('https://hidden-shelf-25964.herokuapp.com/postBlog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                alert("Blog Published")
            })


    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '8273e8bed23f1645029948b7f60f08be')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row mt-3">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-3">
               <div className="p-5 ms-3">
               <h3 style={{color: '#0bff96'}}>Publish A New Blog</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="form-label">Title</p>
                    <input name="title" className="form-control w-50" ref={register} /> <br/>
                    <p className="form-label">Content</p>
                    <input name="content" className="form-control w-50" ref={register} /> <br/>
                    <p className="form-label">URL</p>
                    <input name="url" className="form-control w-50" ref={register({ required: true })} /> <br/>
                    <input name="image" type="file" ref={register} className="form-control w-50" onChange={handleImageUpload}/>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className="btn btn-info btn-sm px-5 mt-3"/>
                </form>
               </div>
            </div>
        </div>
    );
};

export default PublishBlog;