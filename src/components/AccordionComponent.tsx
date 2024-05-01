import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { IDish } from '../types/types';
import List from './List';

interface accordionProps {
  dishes: IDish[];
}

export const AccordionComponent: FC<accordionProps> = ({ dishes }) => {
  return (
    <Accordion defaultActiveKey={dishes[0].id}>
      <List
        items={dishes}
        renderItem={(item: IDish) => (
          <Accordion.Item eventKey={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>

            <Accordion.Body className="accordion-body  fst-italic text-dark bg-secondary text-center">
              <img src={item.icon} alt="Meat dishes"></img>
              <p className="text-description">{item.text}</p>
              <p className="text-warning bg-success">
                &#8364; {item.price.toFixed(2)}
              </p>
              <button className="btn btn-danger btn-sm text-uppercase mt-1">
                Order
              </button>
            </Accordion.Body>
          </Accordion.Item>
        )}
      />
    </Accordion>
  );
};
