import React from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Home/Header/Header'
import Blogs from './Blog/Blogs';
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;