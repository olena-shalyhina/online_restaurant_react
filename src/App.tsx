import { useEffect, useState } from 'react';
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
    <Container className='main_container bg-dark d-flex flex-column justify-content-between'>
      <Header />
      <RouteComponent />
      <Footer />
      <Copyright />
    </Container>
  );
}

export default App;
