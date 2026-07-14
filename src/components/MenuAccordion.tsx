import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { IDish } from '../types/types';
import List from './common/List';
import { useAppDispatch } from '../redux/store/reduxHook';
import { addDish } from '../redux/store/selectedDishSlice';
import { Button, Card } from 'react-bootstrap';

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
            <Accordion.Body className='accordion-body text-dark bg-dark text-center p-0 m-0'>
              <Card className='bg-dark text-light text-center w-100 border-0 rounded-0'>
                <div className='img-wrapper'>
                  <Card.Img
                    variant='top'
                    src={item.icon}
                    alt='Meat dishes'
                    className='border-0 rounded-0'
                  />
                </div>

                <Card.Body>
                  <Card.Title className='fw-semibold text-warning'>
                    € {item.price.toFixed(2)}
                  </Card.Title>

                  <Card.Text className='fst-italic text-description m-3'>
                    {item.text}
                  </Card.Text>

                  <Button
                    variant='danger'
                    size='sm'
                    className='text-uppercase px-3 rounded-2'
                    onClick={() => dispatch(addDish(item))}
                  >
                    Order
                  </Button>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        )}
      />
    </Accordion>
  );
};
