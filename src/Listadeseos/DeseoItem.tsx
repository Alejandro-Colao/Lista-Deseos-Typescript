import { useState, useEffect } from "react";
import { DeseoItemProps } from "../types";

export default function DeseoItem({ Deseo, onHechoChange }: DeseoItemProps) {
  const [edad, setEdad] = useState<number>(0);

  useEffect(() => {
    // Calculamos la edad inicial basándonos en la fecha de creación
    const calcularEdad = () => {
      const segundos = Math.floor((Date.now() - Deseo.fecha) / 1000);
      setEdad(segundos);
    };

    calcularEdad();

    if (!Deseo.hecho) {
      const interval = setInterval(calcularEdad, 1000);
      return () => clearInterval(interval);
    }
  }, [Deseo.hecho, Deseo.fecha]);

  return (
    <li
      className={`Deseo-lista_item  
        ${Deseo.hecho ? "Deseo-lista__item--hecho" : ""}
        ${!Deseo.hecho && edad > 60 && edad < 300 ? "Deseo-lista__item--viejo" : ""}
        ${!Deseo.hecho && edad >= 300 ? "Deseo-lista__item--hazloya" : ""}
      `}
    >
      <input
        type="checkbox"
        checked={Deseo.hecho}
        onChange={() => onHechoChange(!Deseo.hecho)}
      />
      <label>{Deseo.titulo}</label>

      {!Deseo.hecho && (
        <>
          {edad > 300 && <span className="tag tag--urgente">¡Hazlo ya!</span>}
          {edad > 60 && edad <= 300 && <span className="tag tag--viejo">Viejo</span>}
        </>
      )}
    </li>
  );
}
