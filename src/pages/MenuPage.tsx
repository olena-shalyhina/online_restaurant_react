import { FC, useEffect, useState } from 'react';
import { AccordionComponent } from '../components/AccordionComponent';
import List from '../components/List';
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

  return (
    <div className="row d-flex align-items-start">
      <List
        items={menu}
        renderItem={(menuSection: IDishes) => (
          <div
            key={menu.indexOf(menuSection)}
            className="menu-section col-lg-4 col-sm-12 mb-3"
          >
            <h3 className="menu-section-title text-uppercase text-dark bg-danger text-center my-3 px-3 border border-2 rounded-2 border-danger">
              {menuSection.typeDishes}
            </h3>
            <AccordionComponent dishes={menuSection.dishes} />
          </div>
        )}
      />
    </div>
  );
};
