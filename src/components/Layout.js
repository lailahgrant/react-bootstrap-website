import React from 'react'
import Container from 'react-bootstrap/Container' //same as import {container} from 'react-bootstrap

 const Layout = (props) =>(
    <Container>
        {props.children}
    </Container>
)

export default Layout;