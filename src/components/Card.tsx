import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export const Card: FC = () => {
  return (
    <div>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Beef steak with vegetables</Accordion.Header>
          <Accordion.Body className="accordion-body  fst-italic text-dark bg-secondary text-center">
            <img src="/src/assets/1630221119_1.jpg" alt="Meat dishes"></img>
            <p>
              Tender tenderloin of grilled beef, vegetables and fragrant spices
            </p>
            <p className="text-warning bg-success"> &#8364; 10.50</p>
            <button className="btn btn-danger btn-sm text-uppercase mt-1">
              Order
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
