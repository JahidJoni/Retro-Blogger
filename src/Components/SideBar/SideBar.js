import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SideBar = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    console.log(loggedInUser);
  
    const [isAdmin, setIsAdmin] = useState(false)
  
    useEffect(()=>{
        fetch('https://hidden-shelf-25964.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    }, [loggedInUser.email])

    return (
        <div className="mt-4">
            <input type="checkbox" id="check" />
            <label for="check">
                <i class="fas fa-bars" id="btn">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></i>
                <i class="fas fa-times" id="cancel"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></i>
            </label>
            <div class="sidebar">
                <header>Menu</header>
                {
                    isAdmin && <div>
                    <Link to="/publish" class="active">
                    <i class="fas fa-qrcode"></i>
                    <span>Publish</span>
                </Link>
                <Link to='/manageblog'>
                    <i class="fas fa-link"></i>
                    <span>Manage Blogs</span>
                </Link>
                <Link to="/admin">
                    <i class="fas fa-stream"></i>
                    <span>Hire Admin</span>
                </Link>
                </div>
                }
                <a href="#">
                    <i class="fas fa-calendar"></i>
                    <span>Events</span>
                </a>
                <a href="#">
                    <i class="far fa-question-circle"></i>
                    <span>About</span>
                </a>
                <a href="#">
                    <i class="fas fa-sliders-h"></i>
                    <span>Services</span>
                </a>
                <a href="#">
                    <i class="far fa-envelope"></i>
                    <span>Contact</span>
                </a>
            </div>
        </div>
    );
};

export default SideBar;