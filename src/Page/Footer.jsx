import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display:flex;
    justify-content : center ;
    align-items:center; 
    flex-direction: row;
    color: grey;
    background: black;
    padding-top:2em;
    
`

function Footer() {
    return (
        <>
                <Div> copyright-{new Date().getFullYear()}| Sandeep Kumar Soni </Div>
        </>
    )
}

export default Footer
