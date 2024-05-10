import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReservationModal } from './ReservationModal';

// import { useLocation } from 'react-router-dom';

export const Header: FC = () => {
  // const location = useLocation();
  // console.log(location);
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      sticky="top"
      expand="md"
      className="row bg-secondary"
      data-bs-theme="secondary"
    >
      <Container>
        <img
          src="src/assets/Starfish.png"
          style={{ width: '50px', margin: '0 10px ' }}
        ></img>
        <Navbar.Brand className="text-danger fw-bold fs-1" href="/">
          STARFISH
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-danger"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto   fs-4" style={{ maxHeight: '200px' }}>
            <Nav.Link href="/menu">MENU</Nav.Link>
            <Nav.Link href="/contacts">CONTACTS</Nav.Link>
          </Nav>
          <div className="d-flex gap-3 justify-content-between ">
            <Button variant="danger" size="sm">
              ORDER TO HOME
            </Button>
            <Button variant="danger" size="sm" onClick={handleShow}>
              BOOK A TABLE
            </Button>
            <ReservationModal show={show} setShow={setShow} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
