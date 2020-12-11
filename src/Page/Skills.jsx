import React from 'react'
import bootstrap from "bootstrap"
import '../Asset/css/skills.css';
import {Link} from 'react-router-dom'

const link = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg>

function Skills() {
    return (
        <>
        <div className="animte-div"></div>
        <div className="animte-div2"></div>
        <div className="animte-div3"></div>
        <div className="animte-div4"></div>
        <div className="animte-div5"></div>
        <div id="skills">
        <div className= "container skills mt-5">
            <div className="row">
                <div className="col-10 mx-auto hero">
                <h1>Skills & Experience </h1>
        <p className="lead">The main area of my expertise is front end development (client side of the web.</p>
        <p className="lead">HTML, CSS, JS, building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts.</p>
        <Link to="/profile" className='btn btn-outline-x mx-2'>
                                {link}
                                </Link>

                                <Link to='/work' className='btn btn-outline-x'> And More</Link>
                </div>
            </div>
       
        </div>
        </div>
        </>
    )
}

export default Skills