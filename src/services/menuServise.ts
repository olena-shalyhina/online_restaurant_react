import { ICard } from '../types/types';

const dishes = [
  {
    id: 1,
    title: 'Beef steak with vegetables',
    icon: '/src/assets/1630221119_1.jpg',
    text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
    price: 10.5,
    food_type: 'Meat dishes',
  },
  {
    id: 2,
    title: 'Beef steak with vegetables',
    icon: '/src/assets/1630224720_1.jpg',
    text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
    price: 9.8,
    food_type: 'Meat dishes',
  },
  {
    id: 3,
    title: 'Beef steak with vegetables',
    icon: '/src/assets/1630227128_2.jpg',
    text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
    price: 11.2,
    food_type: 'Meat dishes',
  },
  {
    id: 4,
    title: 'Salmon and salted potatoes',
    icon: '/src/assets/1630219545_12.jpg',
    text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
    price: 12.5,
    food_type: 'Fish dishes',
  },
  {
    id: 5,
    title: 'Salmon and salted potatoes',
    icon: '/src/assets/1630213374_11.jpg',
    text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
    price: 9.8,
    food_type: 'Fish dishes',
  },
  {
    id: 6,
    title: 'Salmon and salted potatoes',
    icon: '/src/assets/1630216693_11.jpg',
    text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
    price: 11.5,
    food_type: 'Fish dishes',
  },
  {
    id: 7,
    title: 'Fujiyama',
    icon: '/src/assets/1630256733_17.jpg',
    text: 'Norwegian salmon, cream cheese, avocado',
    price: 9.0,
    food_type: 'Sushi',
  },
  {
    id: 8,
    title: 'Fujiyama',
    icon: '/src/assets/1630223257_11.jpg',
    text: 'Norwegian salmon, cream cheese, avocado',
    price: 12.5,
    food_type: 'Sushi',
  },
  {
    id: 9,
    title: 'Fujiyama',
    icon: '/src/assets/1630223257_11.jpg',
    text: 'Norwegian salmon, cream cheese, avocado',
    price: 11.0,
    food_type: 'Sushi',
  },
];

export const getCards = async () => {
  return new Promise<ICard[]>((resolve) => resolve(dishes));
};
