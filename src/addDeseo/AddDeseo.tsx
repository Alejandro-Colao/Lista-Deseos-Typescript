import { useState, ChangeEvent, KeyboardEvent } from "react";
import { AddDeseoProps } from "../types";

export default function AddDeseo({ onNewDeseo }: AddDeseoProps) {
  const [nuevoDeseo, setNuevoDeseo] = useState("");

  const handleSubmit = () => {
    if (nuevoDeseo.trim()) {
      onNewDeseo(nuevoDeseo.trim());
      setNuevoDeseo("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="Deseo-input">
      <input
        type="text"
        className="Deseo-input__field"
        placeholder="¿Qué deseas?"
        value={nuevoDeseo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNuevoDeseo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="Deseo-input__button" onClick={handleSubmit}>
        Agregar Deseo
      </button>
    </div>
  );
}
