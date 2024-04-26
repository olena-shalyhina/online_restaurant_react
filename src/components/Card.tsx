import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ICard } from '../types/types';

interface CardProps {
  card: ICard;
}

export const Card: FC<CardProps> = ({ card }) => {
  return (
    <div>
      <Accordion defaultActiveKey={['1']} alwaysOpen>
        <Accordion.Item eventKey={card.id}>
          <Accordion.Header>{card.title}</Accordion.Header>
          <Accordion.Body className="accordion-body  fst-italic text-dark bg-secondary text-center">
            <img src={card.icon} alt="Meat dishes"></img>
            <p className="text-description">{card.text}</p>
            <p className="text-warning bg-success"> &#8364; {card.price}</p>
            <button className="btn btn-danger btn-sm text-uppercase mt-1">
              Order
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
