import Pagina from "@/components/template/Pagina";
import { ProvedorContador } from "@/data/context/ContextoContador";

export default function Layout(props: any) {
  return <Pagina>{props.children}</Pagina>;
}
