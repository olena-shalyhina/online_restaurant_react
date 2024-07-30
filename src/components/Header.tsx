import { FC, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReservationModal } from './ReservationModal';
import { Cart } from './Cart';
import { useAppSelector } from '../redux/store/reduxHook';
import { createStorage } from '../utils/localStorageFunctions';
import logoImage from '../assets/Starfish.png';

export const Header: FC = () => {
  const url = import.meta.env.BASE_URL;
  const selectedDishes = useAppSelector((state) => state.dishes.list);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      createStorage(selectedDishes);
    }
    isMounted.current = true;
  }, [selectedDishes]);

  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-secondary border-2 border-bottom border-danger"
      data-bs-theme="dark"
    >
      <Container>
        <img src={logoImage} style={{ width: '60px', margin: '0 10px ' }}></img>

        <Navbar.Brand className="text-danger fw-bold fs-1" href={`${url}`}>
          STARFISH
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-danger"
        />
        <Cart />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto  text-light fs-5"
            style={{ maxHeight: '200px' }}
          >
            <Nav.Link href={`${url}menu`}>MENU</Nav.Link>
            <Nav.Link href={`${url}contacts`}>CONTACTS</Nav.Link>
          </Nav>
          <div className="d-flex gap-3 justify-content-start">
            <Button variant="danger" onClick={handleShow}>
              BOOK A TABLE
            </Button>
            <Button
              variant="danger"
              href={`${url}menu`}
              className="d-flex align-items-center"
            >
              ORDER TO HOME
            </Button>

            <ReservationModal show={show} setShow={setShow} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
