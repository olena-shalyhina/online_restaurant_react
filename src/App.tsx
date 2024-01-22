import RouteComponent from './routes/RouteCоmponent';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Container className="main_container d-flex flex-column gap-5" fluid>
      <Header />
      <RouteComponent />
      <Footer />
    </Container>
  );
}

export default App;
