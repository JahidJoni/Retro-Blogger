import React from 'react';
import bg1 from '../../../images/bg (2).jpg'
import bg2 from '../../../images/bg (5).jpg'
import bg3 from '../../../images/bg (4).jpg'
import bg4 from '../../../images/bg (3).jpg'
import './Header.css'

const Header = () => {
    return (
        <>
            <section className="container d-flex align-items-center" style={{ height: "530px" }}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <h3 className='trending text-center'>TRENDING</h3>
            
                    <hr className="my-4"></hr>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row bg-light">
                                <div className="col-md-4">
                                    <img className="img-fluid" src={bg1} alt="" />
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="m-3 p-2">
                                        <h4>Your most unhappy customers are your greatest source of learning</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                                        <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row bg-light">
                                <div className="col-md-4">
                                    <img className="img-fluid" src={bg2} alt="" />
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="m-3 p-2">
                                        <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                                        <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <div className="row bg-light">
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="m-3 p-2">
                                        <h4>Your most unhappy customers are your greatest source of learning</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                                        <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-fluid" src={bg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row bg-light">
                                <div className="col-md-4">
                                    <img className="img-fluid" src={bg4} alt="" />
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="m-3 p-2">
                                        <h4>Your most unhappy customers are your greatest source of learning</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                                        <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Header;