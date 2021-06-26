import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>Retro<span>Blogger</span></h3>

                    <p class="footer-links text-secondary">
                        <a className="mx-2" href="#">Home</a>
                        ·
                        <a className="mx-2" href="#">Blog</a>
                        ·
                        <a className="mx-2" href="#">Pricing</a>
                        ·
                        <a className="mx-2" href="#">About</a>
                        ·
                        <a className="mx-2" href="#">Faq</a>
                        ·
                        <a className="mx-2" href="#">Contact</a>
                    </p>

                    <p class="footer-company-name mx-2">Jahid Joni &copy; 2022</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>21 Revolution Street</span> Uttara, Dhaka</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+880 1646407263</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:jh.joni07@gmail.com">jh.joni07@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Retro Blogger is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
                    </p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;