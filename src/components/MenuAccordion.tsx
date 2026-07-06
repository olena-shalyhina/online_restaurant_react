import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { IDish } from '../types/types';
import List from './common/List';
import { useAppDispatch } from '../redux/store/reduxHook';
import { addDish } from '../redux/store/selectedDishSlice';
import { Button } from 'react-bootstrap';

interface AccordionProps {
  dishes: IDish[];
}

export const MenuAccordion: FC<AccordionProps> = ({ dishes }) => {
  const dispatch = useAppDispatch();

  return (
    <Accordion defaultActiveKey={dishes[0].id}>
      <List
        items={dishes}
        renderItem={(item: IDish) => (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body className='accordion-body text-dark bg-dark text-center'>
              <div className='img-wrapper'>
                <img src={item.icon} alt='Meat dishes'></img>
              </div>
              <div className='wrapper'>
                <p className='text-description  fst-italic m-3'>{item.text}</p>
                <p className='text-warning fw-semibold  fs-6 '>
                  &#8364; {item.price.toFixed(2)}
                </p>
              </div>
              <Button
                className='btn btn-danger btn-sm text-uppercase px-3 rounded-2'
                onClick={() => {
                  dispatch(addDish(item));
                }}
              >
                Order
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        )}
      />
    </Accordion>
  );
};
