import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { IDish } from '../types/types';
import List from './common/List';
import { useAppDispatch } from '../redux/store/reduxHook';
import { addDish } from '../redux/store/selectedDishSlice';

interface AccordionProps {
  dishes: IDish[];
}

export const MenuAccordion: FC<AccordionProps> = ({ dishes }) => {
  const dispatch = useAppDispatch();
  // const orderDish = () => {
  //   localStorage.setItem("dish", JSON.stringify(dish: IDish))
  // };
  return (
    <Accordion defaultActiveKey={dishes[0].id}>
      <List
        items={dishes}
        renderItem={(item: IDish) => (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>

            <Accordion.Body className="accordion-body  fst-italic text-dark bg-secondary text-center">
              <div className="wrapper">
                <img src={item.icon} alt="Meat dishes"></img>
                <p className="text-description">{item.text}</p>
                <p className="text-warning bg-success">
                  &#8364; {item.price.toFixed(2)}
                </p>
              </div>
              <button
                className="btn btn-danger btn-sm text-uppercase mt-1"
                onClick={() => {
                  dispatch(addDish(item));
                  console.log(item, '--- карточка, по которой кликнули ---');
                }}
              >
                Order
              </button>
            </Accordion.Body>
          </Accordion.Item>
        )}
      />
    </Accordion>
  );
};
