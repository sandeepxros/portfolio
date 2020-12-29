import React from 'react'
import styled from 'styled-components'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Section = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    width:100%; 
    background : #000000; 
    color : #fff; 
    padding-top:12vh;
    margin:0;
    display:flex;
    justify-content:space-around;
    align-items:center;
        @media only screen and (max-width: 768px) {
        flex-direction:column;
}
`
const Iframe = styled.iframe`

   border:none;
   height:400px;
   width:500px;
   @media only screen and (max-width: 768px) {
    height:400px;
   width:300px;
   margin-top:20px;
}
`;
const Div = styled.div`
    overflow:hidden;
    display:flex; 
    flex-direction:${props=>props.row?'row':'column'};
    justify-content:center;
    align-items:center;
    background:black;
 
`;
const A = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Major+Mono+Display&display=swap');
    text-decoration:none;
    font-family: "Major Mono Display";
    color: #fff;
    font-size:1.3em;
    font-weight:600;
    transition:0.5s all ease;
    cursor:pointer;
    :hover{
        color:yellow;
    }

`
const Icon = styled(FaGithub)`
font-size: 1.3em;
margin-left:.3em;
`

const H = styled.h1`

    font-family: 'Major Mono Display', monospace;
    color: #fff;
    font-weight:700;
    margin: 0 auto;
    text-decoration : underline;
    font-size:1.5em; 
    @media only screen and (min-width: 768px) {
        margin-top:14vh;
        font-size:3em; 
}
    
`
function Portfolio() {
    return (
        <>
       
       <Div row><H><b>Some Projects</b></H></Div>
        <Section>
           
        <Div>
        <Iframe src="https://lucid-stonebraker-7bad4c.netlify.app/#" title="description" scrolling="no" />
        <A href="https://lucid-stonebraker-7bad4c.netlify.app/#" target='_blank' rel="noreferrer">go to site</A>
        </Div>
        <Div>
        <Iframe src="https://sandeepkumarsoni.netlify.app" title="description" scrolling="no" />
        <A href="https://sandeepkumarsoni.netlify.app" target='_blank' rel="noreferrer">go to site</A>
        </Div>
        </Section>
        <Section>
            <Div>
        <Iframe src="https://magicnotesbysandeep.netlify.app/" title="description" scrolling="no" />
        <A href="https://magicnotesbysandeep.netlify.app/" target='_blank' rel="noreferrer">go to site</A>
        </Div>
        <Div>
        <Iframe src="https://condescending-dijkstra-5b1f1b.netlify.app/" title="description"  scrolling="no"/>
        <A href="https://condescending-dijkstra-5b1f1b.netlify.app/" target='_blank' rel="noreferrer">go to site</A>
        </Div>
        </Section>
        <Div>
        <Link className='link-button' to="/">Home Page</Link>
        </Div>
        <Section>
        <Div row>There are many more check it out. <A href="https://github.com/sandeepxros" target='_blank' rel="noreferrer"><Icon /></A></Div>
        </Section>

        </>
    )
}

export default Portfolio