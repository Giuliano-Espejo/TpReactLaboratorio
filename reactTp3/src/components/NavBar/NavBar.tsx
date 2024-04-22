import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const NavBar = () => {

  const scrollToDondeEstamos = () => {
    const dondeEstamosElement = document.getElementById('donde-estamos');
    if (dondeEstamosElement) {
      dondeEstamosElement.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll hacia abajo de forma suave
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
    <Container>
      <Navbar.Brand>Musical Hendrix</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dondeEstamos" >Donde Estamos</Nav.Link>
          <Nav.Link href="/instrumentos">Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
