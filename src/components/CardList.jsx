import Card from "./Card";

export default function CardList({ items, searchTerm }) {
  return (
    <div className="cardlist">
      {items.map((item) => (
        <Card key={item.id} item={item} searchTerm={searchTerm} />
      ))}
    </div>
  );
}
