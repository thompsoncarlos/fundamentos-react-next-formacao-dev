import Image from "next/image";

export default function LogoAlt() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="https://logospng.org/download/bmw/logo-bmw-4096.png"
        width={50}
        height={50}
        alt="Logo"
      />
      <span className="text-xl font-black">BMW</span>
    </div>
  );
}
