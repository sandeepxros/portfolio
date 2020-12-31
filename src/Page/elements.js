import styled from 'styled-components';
import { FaHubspot } from "react-icons/fa"

export const Nav = styled.nav`  
display:flex; 
flex-direction:row; 
overflow:hidden ; 
margin:0 auto; 
justify-content:space-around;
width:100%;
height:10vh;
align-items:center;
border-bottom:1px solid yellow;
flex-wrap:nowrap;
position:fixed;
transition: .5s all ease;
background:black;
position:fixed;
top:0;
left:0;
@media only screen and (max-width: 768px) {
    
    display:none;
}
@media only screen and (min-width: 768px) {
    background:transparent;
}
z-index:100;
`

// ======================================
export const MobileNav = styled(Nav)`
    display:flex;
    flex-direction:column;
    height:80vh;
    background:rgba(0,0,0,0.9);
    top:${(props) => (props.show === 'flex') ? '0em' : `-100em`};
        @media only screen and (min-width: 768px) {

         top:-100em;
         transition: .5s all ease;
        }
        transition: 1s all ease-in-out;
        z-index:1000;
`

// =============================================

export const Collapase = styled(FaHubspot)`
    font-size:3em;
    color:yellow;
    cursor: pointer ;
    margin-top:.2em;
    transition:.5s all ease;
    z-index:100;
    transform:${(props) => (props.show === 'flex') ? 'rotateZ(260deg)' : `rotateZ(0deg)`};
    position:fixed;
    bottom:10%;
    left:10%;
    background:rgba(0,0,0,0.3);
    border-radius:50%;
    @media only screen and (min-width: 768px) {

    display:none;
    
   
    }
    :hover{
        color:yellow;
    }
`

