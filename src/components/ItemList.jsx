import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
