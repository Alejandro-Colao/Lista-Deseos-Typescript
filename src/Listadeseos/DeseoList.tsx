import { DeseoListProps } from "../types";
import DeseoItem from "./DeseoItem";

export default function DeseoList({ ListaDeseos, onHechoChange }: DeseoListProps) {
  if (ListaDeseos.length === 0) {
    return (
      <div style={{ margin: "2rem 0", color: "var(--text-muted)" }}>
        <p>Tu lista está vacía. ¡Empieza a soñar!</p>
      </div>
    );
  }

  return (
    <ul className="Deseo-lista">
      {ListaDeseos.map((deseo, index) => (
        <DeseoItem
          key={deseo.fecha}
          onHechoChange={(hecho) => onHechoChange(hecho, index)}
          Deseo={deseo}
        />
      ))}
    </ul>
  );
}
