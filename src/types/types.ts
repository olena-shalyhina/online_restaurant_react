export interface IDish {
  id: string;
  title: string;
  icon: string;
  text: string;
  price: number;
  dishVariant: string;
}
export interface IDishes {
  typeDishes: string;
  dishes: IDish[];
}
