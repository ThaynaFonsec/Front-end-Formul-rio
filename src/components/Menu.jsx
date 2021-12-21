import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {VscCircleFilled} from 'react-icons/vsc'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{letterSpacing: 1}}>
                <Container>
                <Navbar.Brand href="/home">Rick and Morty</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/personagens"><VscCircleFilled/> Personagens</Nav.Link>
                <Nav.Link href="/animais"><VscCircleFilled/> Animais</Nav.Link>
                <Nav.Link href="/aliens"><VscCircleFilled/> Aliens</Nav.Link>
                <Nav.Link href="/episodios"><VscCircleFilled/> Episódio</Nav.Link>
                <Nav.Link href="/ricks"><VscCircleFilled/> Ricks</Nav.Link>
                </Nav>
                </Container>
            </Navbar>                      
        </>
    )
}

export default Menu
