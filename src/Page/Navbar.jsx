import React, {useState} from 'react'
import {Collapase,MobileNav,Nav } from './elements'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [clicked, setClikc] = useState(true)

    return (
        <>
           
            <Collapase onClick={()=>setClikc(!clicked)} show = {clicked?'none':'flex'}></Collapase>
            
            <MobileNav show = {clicked?'none':'flex'}>
                <Link className= 'Links' to="/" onClick={()=>setClikc(!clicked)} ><b>Home</b></Link>
                <Link className= 'Links'  to="/about" onClick={()=>setClikc(!clicked)} ><b>About Me</b></Link>
                <Link className= 'Links'  to="/portfolio" onClick={()=>setClikc(!clicked)} ><b>Portfolio</b></Link>
                <a className= 'Links'  href='mailto:sandeepkumar8842@gmail.com'  onClick={()=>setClikc(!clicked)} ><b>Contact</b></a>
                <a className= 'Links' href='mailto:sandeepkumar8842@gmail.com' onClick={()=>setClikc(!clicked)} ><b>Hire Me</b></a>
            </MobileNav>
            <Nav id="main-nav">
                <Link className= 'Links' to='/' ><b>Home</b></Link>
                <Link className= 'Links' to='/about' ><b>About Me</b></Link>
                <Link className= 'Links' to='/portfolio'><b>Portfolio</b></Link>
                <a className= 'Links' href='mailto:sandeepkumar8842@gmail.com'  ><b>Contact</b></a>
                <a className= 'Links' href='mailto:sandeepkumar8842@gmail.com' ><b>Hire Me</b></a>
            </Nav>
            <div className='content'>
            </div>
    
        </>
    )

}

