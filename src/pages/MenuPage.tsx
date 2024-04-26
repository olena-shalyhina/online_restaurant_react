import { FC, useEffect, useState } from 'react';

import { Card } from '../components/Card';
import { ICard } from '../types/types';

import { getCards } from '../services/menuServise';

import '../../src/styles/menuPage.scss';
import List from '../components/List';

export const MenuPage: FC = () => {
  const [cards, setCards] = useState<ICard[][]>([]);

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
          <h3 className="dish-section-title text-uppercase text-dark bg-danger text-center my-3 px-3 border border-2 rounded-2 border-danger">
            Meat dishes
          </h3>
          <List
            items={cards[0]}
            renderItem={(card: ICard) => <Card card={card} key={card.id} />}
          />
        </div>
        <div className="menu-meat-dishes col-lg-4 col-sm-12 mb-3">
          <h3 className="text-uppercase text-dark bg-danger text-center my-3 px-3 border border-2 rounded-2 border-danger">
            Fish dishes
          </h3>
          <List
            items={cards[1]}
            renderItem={(card: ICard) => <Card card={card} key={card.id} />}
          />
        </div>
        <div className="menu-meat-dishes col-lg-4 col-sm-12 mb-3">
          <h3 className="text-uppercase text-dark bg-danger text-center my-3 px-3 border border-2 rounded-2 border-danger">
            Sushi
          </h3>
          <List
            items={cards[2]}
            renderItem={(card: ICard) => <Card card={card} key={card.id} />}
          />
        </div>
      </div>
    </div>
  );
};
