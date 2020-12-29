import React from 'react'
import styled from 'styled-components'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Section = styled.section`
   
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

const Icon = styled(FaGithub)`
font-size: 1.3em;
margin-left:.3em;
`

const H = styled.h1`

    font-family: 'Major Mono Display', monospace;
    color: #fff;
    margin: 0 auto;
    margin-top : 2em ; 
    letter-spacing: 0.1em;
    font-size:1.5em; 
    @media only screen and (min-width: 768px) {
        margin-top:14vh;
        font-size:3em; 
}
    
`
function Portfolio() {
    return (
        <>
       
       <Div row><H>Some Projects</H></Div>
        <Section>
           
        <Div>
        <Iframe src="https://lucid-stonebraker-7bad4c.netlify.app/#" title="description" scrolling="no" />
        <a className='github-link'  href="https://lucid-stonebraker-7bad4c.netlify.app/#" target='_blank' rel="noreferrer">go to site</a>
        </Div>
        <Div>
        <Iframe src="https://sandeepkumarsoni.netlify.app" title="description" scrolling="no" />
        <a className='github-link'  href="https://sandeepkumarsoni.netlify.app" target='_blank' rel="noreferrer">go to site</a>
        </Div>
        </Section>
        <Section style={{paddingTop:'none'}}>
            <Div>
        <Iframe src="https://magicnotesbysandeep.netlify.app/" title="description" scrolling="no" />
        <a className='github-link'  href="https://magicnotesbysandeep.netlify.app/" target='_blank' rel="noreferrer">go to site</a>
        </Div>
        <Div>
        <Iframe src="https://condescending-dijkstra-5b1f1b.netlify.app/" title="description"  scrolling="no"/>
        <a className='github-link'  href="https://condescending-dijkstra-5b1f1b.netlify.app/" target='_blank' rel="noreferrer">go to site</a>
        </Div>
        </Section>
        <Div>
        <Link className='link-button add-margin' to="/">Home Page</Link>
        </Div>
        <Section>
        <Div row> <a className='github-link'  href="https://github.com/sandeepxros" target='_blank' rel="noreferrer">
        <span className='github-span'>There are many more check it out. </span> 
            <Icon /></a></Div>
        </Section>

        </>
    )
}

export default Portfolio
