import RouteComponent from './routes/RouteCоmponent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Copyright } from './components/Copyright';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Container className="main_container d-flex flex-column justify-content-between ">
      <Header />
      <RouteComponent />
      <Footer />
      <Copyright />
    </Container>
  );
}

export default App;
