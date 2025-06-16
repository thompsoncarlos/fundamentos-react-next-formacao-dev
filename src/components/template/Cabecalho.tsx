import Image from "next/image";
import Logo from "./Logo";

export interface CabecalhoProps {}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <header className="flex items-center px-6  h-20 border-b border-zinc-300">
      <Logo />
    </header>
  );
}
