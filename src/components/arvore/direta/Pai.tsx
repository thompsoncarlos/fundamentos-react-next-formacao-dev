import Filho from "./Filho";

export interface PaiProps {
  nome: string;
  sobrenome: string;
  filhos: string[];
}

export default function Pai(props: PaiProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        Pai: {props.nome} {props.sobrenome}
      </h3>
      <div className="py-6">
        <span className="text-zinc-500 py-2.5 text-xl">Lista de Filhos:</span>
        {props.filhos.map((nome, i) => (
          <Filho key={i} nome={nome} sobrenome={props.sobrenome} />
        ))}
      </div>
    </div>
  );
}
