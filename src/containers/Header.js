import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className='fs-3 fw-semibold text-white' to="/">FakeStore</NavLink>
                </Container>
            </Navbar>

        </>
    )
}

export default Header