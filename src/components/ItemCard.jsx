export default function ItemCard({ item }) {
  return (
    <div className="rounded-2xl border-2 p-2 shadow-md text-center hover:bg-gray-200 hover:shadow-2xl">
      <h2 className="capitalize">{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-contain mx-auto mb-2"
      />
    </div>
  );
}
