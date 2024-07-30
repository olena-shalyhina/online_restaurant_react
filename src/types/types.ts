export interface IDish {
  id: string;
  title: string;
  icon: string;
  text?: string;
  price: number;
  dishVariant: string;
  number: number;
}

export interface IDishes {
  typeDishes: string;
  dishes: IDish[];
}

export interface IReservationFormFields {
  email: string;
  name: string;
  phone: string;
  people: number;
  date: string;
  time: string;
  textarea?: string;
}
