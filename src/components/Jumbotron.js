import React from 'react'

import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import sky from '../assets/sky2.png'

const Styles = styled.div`
.jumbo{
    background: url(${sky}) no-repeat fixed bottom;
    background-size:cover;
    color:#000;
    height:200px;
    position:relative;
    z-ndex: -2;
}

.overlay{
    background-color:#000;
    opacity:0.6;
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:-1;
}

`;

const Jumbotron = () =>(
<Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay">   </div>
        <Container>
            <h3>Welcome</h3>
            <p>Learn to code from my youtube videos</p>
        </Container>
    </Jumbo>
</Styles>
)

export default Jumbotron;