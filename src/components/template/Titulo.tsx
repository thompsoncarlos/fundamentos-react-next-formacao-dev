export interface TituloProps {
  principal: string;
  secundario?: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{props.principal}</h1>
      {props.secundario && (
        <p className="text-sm text-zinc-500">{props.secundario} </p>
      )}
    </div>
  );
}
