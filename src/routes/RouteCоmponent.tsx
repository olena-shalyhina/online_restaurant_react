import { Routes, Route } from 'react-router-dom';
import { MenuPage } from '../pages/MenuPage';
import { MainPage } from '../pages/MainPage';
import { ContactsPage } from '../pages/ContactsPage';

// import { Notfoundpage } from '../pages/Notfoundpage';

function RouteComponent() {
  // const env = import.meta.env.NODE_ENV;
  // const url = import.meta.env[`VITE_REACT_APP_HOME_URL_${env}`];

  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      {/* <Route path="*" element={<Notfoundpage />} /> */}
      {/* <Route path={`${url}/notfound`} element={<Notfoundpage />} /> */}
    </Routes>
  );
}
export default RouteComponent;
