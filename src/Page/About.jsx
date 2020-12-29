import React from 'react'
import styled , {keyframes} from 'styled-components'
import pic from '../Asset/about.png'
import {Link} from 'react-router-dom'

const animations = keyframes`
 0% {   opacity: 0 ; transform : scale(.1) }
 30% {   opacity:.2  }
 70% {   opacity: .5  }
 100% { opacity: 1 ; transform : scale(1) }
`

const Section = styled.section`
    font-family: 'Open Sans', sans-serif;
    width:100%; 
    background : black; 
    color : #fff; 
    padding-top:10vh;
    padding-left: 20px;
    padding-right:20px;
    padding-bottom:10vh;
    display: flex ;   
    @media only screen and (min-width: 768px) {
       height: 100vh;
}       
    animation : ${animations} 2s ease-in-out; 
   
  
`
const Pic = styled.img`
   width: 200px;
   display:block; 
   border-radius:  50%;
   cursor:pointer;
   transition: 0.5s all ease;
   :hover{
       transform:scale(1.1)
   }
`;
const Div = styled.div`
    display:${(props)=> props.display};
    flex-direction:${(props)=> props.row };
    align-items:center;
    margin: 0 auto;
    padding:10px;
    text-align:justify;
    line-height:2em;
    
    justify-content:${(props)=> props.justify};
    @media only screen and (max-width: 768px) {

        display:flex;
        flex-direction:column;
    }
    

`
const H1 = styled.h1`
    font-size:4em; 
    font-family: 'Major Mono Display', monospace;
    color: #fff;
    font-weight:700;
    padding: 20px;
    text-align:center;
    
`

function About() {
    return (
        <>                  
       <Section>
          <Div display='flex' row="row" justify='center'>
                  <Pic src={pic} alt='my image'></Pic>
                   <Div display='flex' row="column" justify='center'>
                       <H1>About Me</H1>
                       <p style={{fontSize:"1.3em"}}>Hi, I am <i>Web devloper. </i>I create sites designes and also code it. I am very passionate about programming and I picked JavaScript as my primary programming language, it is versetile and  everywhere though. Since I am very curious and creative I like to make new designs.<br></br>
                       </p>
                      <Div display='flex' row="row" justify='center'>
                      <a className='link-button' href="mailto:sandeepkumar8842@gmail.com">Hire Me</a>
                       <Link className='link-button' to="/portfolio">Next Page</Link>
                      </Div>
                    </Div>             
              </Div>      
       </Section>
       </>
    )
}

export default About
