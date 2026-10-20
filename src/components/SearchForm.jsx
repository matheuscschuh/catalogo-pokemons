export default function SearchForm({ busca, setBusca }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar pokémon..."
        className="border border-gray-300 rounded-lg p-2 w-full max-w-md mb-4"
      />
    </form>
  );
}
