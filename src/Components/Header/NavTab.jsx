import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const NavTab = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link>
              <img src="./src/assets/logo.png" alt="Logo" />
            </Nav.Link>
            <Nav.Link href="/Profile">Perfil</Nav.Link>
            <Nav.Link href="/Profile">Skills</Nav.Link>
            <Nav.Link href="/Profile">Proyectos</Nav.Link>
            <Nav.Link href="/Profile">Contactos</Nav.Link>
          </Nav>
          <Navbar.Brand>
            <a href="#login">
              <img src="./src/assets/Github.png" alt="Github" />
            </a>
            <a href="#login">
              <img src="./src/assets/linkedIn.png" alt="LinkedIn" />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavTab;