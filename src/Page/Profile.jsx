import React from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import '../Asset/css/profile.css';
import img from '../Asset/images/profile.jpg'
import {Link} from 'react-router-dom'

const link = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg>


function Profile() {
    
    return (
        <>
        <div id="profile" className="d-flex align-items-center">
         <div className="row mt-5">
             <div className="col-10 mx-auto ">
                 <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mt-5">
                    <img src={img} alt="hellp" className="img-fluid animate" style={{width:"400px"}} />
                    </div>
                    <div className="col-md-6 mt-5">
                    <h1 className="display-3">
                                    Let Me Introduce Myself
                                </h1>
                                <p className='lead'>
                                    As you know my name, let's get ahed.
                                    I am avid computer fan and love to do some crazy stuffs on it, certainly I moved to coding and got the point through code I can give instruction to the computer.
                                    but as time passing after completion of my BCA degree I eventully got interested in web technologies perhaps that's what I'm doing. 
                                    <strong>I love to code, and it should be beautiful</strong> 
                                    I love to learn new technologies and get used to it. <br></br>
                                    <span class="sed">Computer Coffee Code and Spotify can seduce me.</span>
                                </p>
                                <Link to="/" className='btn btn-outline-color mx-2'>
                                {link}
                                </Link>

                                <Link to='/skill' className='btn btn-outline-color'> And More</Link>
                    </div>
                 </div>
             </div>
           </div>
        </div>
        </>
    )
}

export default Profile