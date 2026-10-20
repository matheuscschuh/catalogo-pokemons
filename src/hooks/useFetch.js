import { useState, useEffect } from "react";

export default function useFetch(funcaoDeBusca) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const resultado = await funcaoDeBusca();
        setData(resultado);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [funcaoDeBusca]);

  return { data, loading, error };
}
