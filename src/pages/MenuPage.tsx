import { FC, useEffect, useState } from 'react';

import { Card } from '../components/Card';
import { ICard } from '../types/types';

import '../../src/styles/menuPage.scss';
import { getCards } from '../services/menuServise';

export const MenuPage: FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const data = await getCards();
    setCards(data);
  };
  console.log(cards);

  return (
    <div>
      <div className="row">
        <div className="menu-meat-dishes col-lg-4 col-sm-12 mb-3">
          <h3 className="text-uppercase text-dark bg-danger text-center my-3 px-3 border border-2 rounded-2 border-danger">
            Meat dishes
          </h3>
          <Card />
        </div>
      </div>
    </div>
  );
};
