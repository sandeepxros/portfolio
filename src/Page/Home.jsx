import React from 'react'
import bootstrap from "bootstrap"
import '../Asset/css/home.css';
import {Link} from "react-router-dom"

function Home() {
    return (
        <>

            <div id="home">

                <div className="hero">
                    <p className="animation-text">Hello World {'</br>'}</p>
                    <br></br>
                    <h1 className='display-3 text-white'>Hi, I am <span style={{
                        color: '#0cebeb',
                        fontWeight: "400"
                    }}>Sandeep Kumar Soni.</span></h1>
                    <p class='lead'>I'm a <span style={{ color: '#0cebeb', fontWeight: "400" }}>Web Devloper.</span></p>
                    <br></br>
                    <Link to="/profile" className="btn btn-outline-light">Know More</Link>
                </div></div>
        </>
    )
}

export default Home
