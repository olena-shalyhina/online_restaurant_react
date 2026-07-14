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
import '../styles/header.scss';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  const url = import.meta.env.BASE_URL;
  const selectedDishes = useAppSelector((state) => state.dishes.list);
  const isMounted = useRef(false);
  const [expanded, setExpanded] = useState(false);

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
      fixed='top'
      expand='lg'
      className='bg-dark border-1 border-bottom border-danger'
      data-bs-theme='dark'
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand
          className='text-danger d-flex align-items-center fw-bold fs-3 fs-sm-1 gap-2'
          href={`${url}`}
        >
          <img src={logoImage} className='logo-img '></img>
          <span className='pb-lg-2'>Coral & Flame</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          className='text-danger'
          onClick={() => setExpanded(!expanded)}
        />
        <Cart />
        <Navbar.Collapse id='responsive-navbar-nav gap-2'>
          <Nav className='me-auto fw-bold fs-6 fs-md-5 gap-lg-2 ps-2 h-25wh'>
            <NavLink
              to={`/menu`}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-danger fw-bold' : ''}`
              }
              onClick={() => setExpanded(false)}
            >
              MENU
            </NavLink>

            <NavLink
              to={`/contacts`}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-danger fw-bold' : ''}`
              }
              onClick={() => setExpanded(false)}
            >
              CONTACTS
            </NavLink>
          </Nav>

          <div className='d-flex gap-3 justify-content-start'>
            <Button
              variant='danger'
              size='sm'
              onClick={handleShow}
              className='rounded-2 px-3  py-lg-2'
            >
              BOOK A TABLE
            </Button>

            <Button
              variant='danger'
              size='sm'
              href={`${url}menu`}
              className='rounded-2 px-3  py-lg-2'
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
