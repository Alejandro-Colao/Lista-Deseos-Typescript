export interface Deseo {
  titulo: string;
  hecho: boolean;
  fecha: number;
}

export interface AddDeseoProps {
  onNewDeseo: (deseo: string) => void;
}

export interface DeseoListProps {
  ListaDeseos: Deseo[];
  onHechoChange: (hecho: boolean, index: number) => void;
}

export interface DeseoItemProps {
  Deseo: Deseo;
  onHechoChange: (hecho: boolean) => void;
}