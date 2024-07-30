import { Routes, Route } from 'react-router-dom';
import { MenuPage } from '../pages/MenuPage';
import { MainPage } from '../pages/MainPage';
import { ContactsPage } from '../pages/ContactsPage';

function RouteComponent() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path={`menu`} element={<MenuPage />} />
      <Route path={`contacts`} element={<ContactsPage />} />
    </Routes>
  );
}
export default RouteComponent;
