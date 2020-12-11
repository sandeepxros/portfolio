import React from 'react'
import bootstrap from "bootstrap"
import '../Asset/css/work.css';
import {Link} from 'react-router-dom'

const link = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg>


function Work() {
    return (
        <>
        <div id="work">
        <div className= "container hero">
         <div className="row">
             <div className="col-10 mx-auto">
             <div className="row ">
                 <div className="col">
                 <h1 className="display-3 work">Work & Project</h1>
                 <p className="lead text-white">
                    Check out my latest projects on <a href="https://github.com/sandeepxros" target="_blank" className="github">Github</a>
                    </p>  
                 <div className="workDiv"></div>
                 <Link to="/skill" className='btn btn-outline-x mx-2'>
                                {link}
                                </Link>

                                <Link to='/contact' className='btn btn-outline-x'>Finally</Link>
                 </div>
             </div>
             </div>
         </div>
        </div>
        </div>
        </>
    )
}

export default Work