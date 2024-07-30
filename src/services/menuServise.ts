import { IDishes } from '../types/types';
import meat_1 from '../assets/1630221119_1.jpg';
import meat_2 from '../assets/1630224720_1.jpg';
import meat_3 from '../assets/1630227128_2.jpg';
import meat_4 from '../assets/1630207211_10.jpg';
import meat_5 from '../assets/1630229241_21.jpg';
import meat_6 from '../assets/1630252896_13.jpg';
import fish_1 from '../assets/1630219545_12.jpg';
import fish_2 from '../assets/1630213374_11.jpg';
import fish_3 from '../assets/1630216693_11.jpg';
import fish_4 from '../assets/1630252941_22.jpg';
import fish_5 from '../assets/1630252819_4.jpg';
import fish_6 from '../assets/1630253641_18.jpg';
import sishi_1 from '../assets/1630256733_17.jpg';
import sishi_2 from '../assets/1630223257_11.jpg';
import sishi_3 from '../assets/1630232118_24.jpg';
import sishi_4 from '../assets/1627876820_19.jpg';
import sishi_5 from '../assets/1627876852_22.jpg';
import sishi_6 from '../assets/1627876908_53.jpg';

const menu = [
  {
    typeDishes: 'meat dishes',
    dishes: [
      {
        id: 'MD1',
        title: 'Beef steak with vegetables',
        icon: meat_1,
        text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
        price: 10.5,
        dishVariant: 'meat dishes',
        number: 0,
      },
      {
        id: 'MD2',
        title: 'Beef steak with vegetables',
        icon: meat_2,
        text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
        price: 9.8,
        dishVariant: 'meat dishes',
        number: 0,
      },
      {
        id: 'MD3',
        title: 'Beef steak with vegetables',
        icon: meat_3,
        text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
        price: 11.2,
        dishVariant: 'meat dishes',
        number: 0,
      },
      {
        id: 'MD4',
        title: 'Beef steak with vegetables',
        icon: meat_4,
        text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
        price: 11.2,
        dishVariant: 'meat dishes',
        number: 0,
      },
      {
        id: 'MD5',
        title: 'Beef steak with vegetables',
        icon: meat_5,
        text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
        price: 9.8,
        dishVariant: 'meat dishes',
        number: 0,
      },
      {
        id: 'MD6',
        title: 'Beef steak with vegetables',
        icon: meat_6,
        text: 'Tender tenderloin of grilled beef, vegetables and fragrant spices',
        price: 11.2,
        dishVariant: 'meat dishes',
        number: 0,
      },
    ],
  },
  {
    typeDishes: 'Fish dishes',
    dishes: [
      {
        id: 'FD1',
        title: 'Salmon and salted potatoes',
        icon: fish_1,
        text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
        price: 12.5,
        dishVariant: 'Fish dishes',
        number: 0,
      },
      {
        id: 'FD2',
        title: 'Salmon and salted potatoes',
        icon: fish_2,
        text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
        price: 9.8,
        dishVariant: 'Fish dishes',
        number: 0,
      },
      {
        id: 'FD3',
        title: 'Salmon and salted potatoes',
        icon: fish_3,
        text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
        price: 11.5,
        dishVariant: 'Fish dishes',
        number: 0,
      },
      {
        id: 'FD4',
        title: 'Salmon and salted potatoes',
        icon: fish_4,
        text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
        price: 12.5,
        dishVariant: 'Fish dishes',
        number: 0,
      },
      {
        id: 'FD5',
        title: 'Salmon and salted potatoes',
        icon: fish_5,
        text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
        price: 9.8,
        dishVariant: 'Fish dishes',
        number: 0,
      },
      {
        id: 'FD6',
        title: 'Salmon and salted potatoes',
        icon: fish_6,
        text: 'Toasted salmon, salted potatoes, root vegetabls and onion',
        price: 11.5,
        dishVariant: 'Fish dishes',
        number: 0,
      },
    ],
  },
  {
    typeDishes: 'Sushi',
    dishes: [
      {
        id: 'S1',
        title: 'Fujiyama',
        icon: sishi_1,
        text: 'Norwegian salmon, cream cheese, avocado',
        price: 9.0,
        dishVariant: 'Sushi',
        number: 0,
      },
      {
        id: 'S2',
        title: 'Fujiyama',
        icon: sishi_2,
        text: 'Norwegian salmon, cream cheese, avocado',
        price: 12.5,
        dishVariant: 'Sushi',
        number: 0,
      },
      {
        id: 'S3',
        title: 'Fujiyama',
        icon: sishi_3,
        text: 'Norwegian salmon, cream cheese, avocado',
        price: 11.0,
        dishVariant: 'Sushi',
        number: 0,
      },
      {
        id: 'S4',
        title: 'Fujiyama',
        icon: sishi_4,
        text: 'Norwegian salmon, cream cheese, avocado',
        price: 9.0,
        dishVariant: 'Sushi',
        number: 0,
      },
      {
        id: 'S5',
        title: 'Fujiyama',
        icon: sishi_5,
        text: 'Norwegian salmon, cream cheese, avocado',
        price: 12.5,
        dishVariant: 'Sushi',
        number: 0,
      },
      {
        id: 'S6',
        title: 'Fujiyama',
        icon: sishi_6,
        text: 'Norwegian salmon, cream cheese, avocado',
        price: 11.0,
        dishVariant: 'Sushi',
        number: 0,
      },
    ],
  },
];

export const getDishes = async () => {
  return new Promise<IDishes[]>((resolve) => resolve(menu));
};
