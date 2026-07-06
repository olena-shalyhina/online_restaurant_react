import { FC, useEffect, useState } from 'react';
import { MenuAccordion } from '../components/MenuAccordion';
import List from '../components/common/List';
import { getDishes } from '../services/menuServise';
import { IDishes } from '../types/types';
import '../../src/styles/menuPage.scss';

export const MenuPage: FC = () => {
  const [menu, setManu] = useState<IDishes[]>([]);

  useEffect(() => {
    fetchManu();
  }, []);

  const fetchManu = async () => {
    const data = await getDishes();
    setManu(data);
  };

  const createSection = (menuSection: IDishes) => (
    <div
      key={menu.indexOf(menuSection)}
      className='menu-section col-lg-4 col-md-6 col-sm-12'
    >
      <h5 className='menu-section-title text-uppercase bg-danger text-center mb-3 p-1 border border-2 rounded-2 border-danger'>
        {menuSection.typeDishes}
      </h5>
      <MenuAccordion dishes={menuSection.dishes} />
    </div>
  );

  return (
    <div className='row d-flex align-items-start justify-content-center g-3 g-lg-5 pt-3 mb-5'>
      <List items={menu} renderItem={createSection} />
    </div>
  );
};
