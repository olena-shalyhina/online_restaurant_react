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

            <Accordion.Body className='accordion-body fst-italic text-dark bg-dark text-center'>
              <div className='wrapper'>
                <img src={item.icon} alt='Meat dishes'></img>
                <p className='text-description'>{item.text}</p>
                <p className='text-warning fw-bold'>
                  &#8364; {item.price.toFixed(2)}
                </p>
              </div>
              <Button
                className='btn btn-danger btn-sm text-uppercase mt-1 px-3 rounded-2'
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
