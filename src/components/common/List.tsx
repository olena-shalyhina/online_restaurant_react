interface ListProps<T> {
  items: T[]; //T - это сам item - например IUser[]
  renderItem: (item: T) => React.ReactNode; // компонент, который мы хотим отрисовать
}

export default function List<T>(props: ListProps<T>) {
  return props.items ? <>{props.items.map(props.renderItem)}</> : '';
}
