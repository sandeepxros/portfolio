import React from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import '../Asset/css/contact.css';
import { Link } from 'react-router-dom'




const link = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z" />
</svg>



function Contact() {
    return (
        <>
            <div id="contact" >
                <div className="container">

                    <div className="row mt-5 mb-5">
                        <h1 className="display-3 mb-5 mx-5">Contact Me</h1>
                        <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
                            <a href="https://facebook.com/sandeepkumarforever" className="btn  btn-outline-color mx-2" target='_blank' rel="noreferrer">
                            <i class="fab fa-facebook-f" ></i>
                            </a>
                            <a href="https://twitter.com/sandeepxros" className="btn btn-outline-color mx-2"target='_blank' rel="noreferrer">
                            <i class="fab fa-twitter"></i>
                             </a>
                            <a href="https://instagram.com/sandeepkumarforever" className="btn btn-outline-color mx-2"target='_blank' rel="noreferrer">
                            <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/sandeepxros" className="btn btn-outline-color mx-2">
                            <i class="fab fa-github"></i>
                            </a>
                            <a href="mailto:sandeepkumar8842@gmail.com" className="btn btn-outline-color mx-2">
                            <i class="far fa-envelope-open"></i>
                            </a>
                            <a href="tel:+919621363477" className="btn btn-outline-color mx-2">
                             <i class="fas fa-mobile-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">

                        <Link to="/work" className='btn btn-outline-x mx-2'>
                            {link}
                        </Link>

                        <Link to='/' className='btn btn-outline-x'>Home</Link>
                    </div>

                </div>
            </div>
            <div className="social" />
            <div className="social2" />


        </>
    )
}

export default Contact