import { IconHeartFilled } from "@tabler/icons-react";

export default function Rodape() {
  return (
    <footer className="flex justify-end items-center gap-1.5 text-sm text-zinc-400 border-t border-zinc-800 h-16">
      <span>Feito com</span>
      <IconHeartFilled size={14} className="text-red-500" />
      <span>por Carlos Thompson.</span>
    </footer>
  );
}
