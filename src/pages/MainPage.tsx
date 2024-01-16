import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import '../styles/_mainPage.scss';

export const MainPage: FC = () => {
  return (
    <Container className="main_page_container" fluid>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
