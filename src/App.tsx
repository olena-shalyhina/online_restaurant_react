import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Copyright } from './components/Copyright';
import { Loader } from './components/common/Loader';
import RouteComponent from './routes/RouteCоmponent';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <Loader />;
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Container className='main_container bg-dark d-flex flex-column justify-content-between'>
        <Header />
        <RouteComponent />
        <Footer />
        <Copyright />
      </Container>
    </BrowserRouter>
  );
}

export default App;
