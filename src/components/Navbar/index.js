import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./nav.css";

function NavbarApp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <div className="Navi">
        <NavLink to="/dashboard" className="navbar navbar-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" width={43}></img>
          <h2>PokeApi</h2>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/crear" className="nav-link">
              <div className="crear">Crear pokemon</div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
