import { useState, useEffect } from "react";
import AddDeseo from "./addDeseo/AddDeseo";
import DeseoList from "./Listadeseos/DeseoList";
import { Deseo } from "./types";

import "./App.css";

const STORAGE_KEY = "wishlist_items";

const estadoInicial: Deseo[] = [
  { titulo: "Ir a la Luna", hecho: false, fecha: Date.now() },
  { titulo: "Ir al quiropráctico", hecho: true, fecha: Date.now() - 100000 },
  { titulo: "Unas Nike nuevas", hecho: false, fecha: Date.now() - 5000 },
];

export default function App() {
  const [deseos, setDeseos] = useState<Deseo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : estadoInicial;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deseos));
  }, [deseos]);

  const onHechoChange = (hecho: boolean, index: number): void => {
    const newDeseos = [...deseos];
    newDeseos[index] = { ...newDeseos[index], hecho };
    setDeseos(newDeseos);
  };

  const agregarDeseo = (titulo: string): void => {
    if (!titulo.trim()) return;
    setDeseos((prev) => [
      { titulo, hecho: false, fecha: Date.now() },
      ...prev,
    ]);
  };

  const limpiarDeseos = (): void => {
    setDeseos((prev) => prev.filter((d) => !d.hecho));
  };

  return (
    <main>
      <h1>Mi Lista de Deseos</h1>
      <AddDeseo onNewDeseo={agregarDeseo} />
      <DeseoList ListaDeseos={deseos} onHechoChange={onHechoChange} />

      {deseos.some(d => d.hecho) && (
        <button className="Deseo-clear" onClick={limpiarDeseos}>
          Limpiar deseos realizados
        </button>
      )}
    </main>
  );
}
