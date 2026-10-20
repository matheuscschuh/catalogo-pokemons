import useFetch from "../hooks/useFetch";
import buscarPokemons from "../services/api";
import ItemList from "../components/ItemList";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const { data, loading, error } = useFetch(buscarPokemons);
  const [busca, setBusca] = useState("");

  const pokemonsFiltrados = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Pokémons</h1>
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-600">Erro: {error}</p>}
      {!loading && !error && (
        <>
          <SearchForm busca={busca} setBusca={setBusca} />
          <ItemList items={pokemonsFiltrados} />
        </>
      )}
    </main>
  );
}
