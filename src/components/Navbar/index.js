import { Navbar,Nav,Container, NavLink } from "react-bootstrap";
function NavbarApp(){
return(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Poke-Api</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/crear" className="nav-link" href="crear">Crear Pokemon</NavLink>
        <NavLink to="/actualizar" className="nav-link" href="actualizar">Actualizar Pokemon</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}
export default NavbarApp;