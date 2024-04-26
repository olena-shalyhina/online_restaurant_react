import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.module.scss';

export const HeaderNavbar: FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar
      expand="md"
      className="d-flex row bg-secondary"
      data-bs-theme="secondary"
    >
      <Container>
        <img
          src="src/assets/Starfish.png"
          style={{ width: '40px', margin: '5px 10px 0' }}
        ></img>
        <Navbar.Brand className="text-danger fw-bold fs-1" href="#">
          STARFISH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-danger" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-md-0 fs-4"
            style={{ maxHeight: '200px' }}
          >
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/menu">MENU</Nav.Link>
            {/* <NavDropdown title="MENU" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="text-danger">
                Meat dishes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-danger">
                Fish dishes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="text-danger">
                Sushi and rolls
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#">CONTACTS</Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-danger"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
