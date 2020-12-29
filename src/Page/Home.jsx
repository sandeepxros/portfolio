//removing bootstrap dependency
// dated : 27.01.2020 v 1.2
import React from 'react'
import styled,{keyframes} from 'styled-components';
import video from '../Asset/ss.mp4'
import poster from '../Asset/nova.gif'
import {Link} from 'react-router-dom'
import audio from '../Asset/canwekiss.mp3'

const animations = keyframes`
 0% {   top:110%; }
 100% { top:70%; }
`
const animation2 = keyframes`
 0% {   top:100%; }
 100% { top:50%; }
`

const Container = styled.section`
    background-color: transparent; 
    height: 100vh;
    width:100%;
    overflow:hidden;
    color:#ffee00; 
    display: flex; 
    justify-content:center ; 
    align-items:center ; 
    flex-direction:column;
    text-align:center ; 
    position:relative;
    @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Major+Mono+Display&display=swap');
     
`
const H1 = styled.h1`
    font-family: 'Bungee Shade', cursive;
    font-size: 3em ;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    animation : ${animation2} 3s ease;  
`;
const P = styled.p`
    font-family: 'Major Mono Display', monospace;
    font-size: 1.5em ;
    position:absolute;
    top:70%;
    left:50%;
    transform :translate(-50%,-50%);
    animation : ${animations} 2.5s ease;  
    
`;
const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
  
`;

function Home() {
    return (

        <>
             
            <Video autoPlay muted loop id="myVideo" poster={poster}>
                    <source src={video} type="video/mp4" />
               Your browser does not support HTML5 video.
             </Video>
                    <audio autoPlay>
        <source src={audio} type="audio/ogg" />
        Your browser does not support the audio element.
        </audio>
         
            <Container id="home">

                <H1><b>Sandeep <br></br>
                Kumar <br></br>
                Soni</b></H1>
                <P><b>I code the Web </b></P>
                <Link className='link-button' style={{ position:'absolute',top:"80%", left:"50%" , transform :"translate(-60%,-50%)"}} to="/about">Start</Link>
            </Container>
           
        </>
    )
}

export default Home
