import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Footer() {

  const ano = new Date().getFullYear();

  return (
    <footer className="bg-[#1B8F70] text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center gap-3">

        <p className="text-lg font-semibold">
          Farmácia On
        </p>

        <p className="opacity-90 text-sm">
          © {ano} — Todos os direitos reservados
          </p>

        <div className="flex gap-5 mt-2 text-white">
          <InstagramLogoIcon size={32} weight="bold" />
          <FacebookLogoIcon size={32} weight="bold" />
          <LinkedinLogoIcon size={32} weight="bold" />
        </div>

      </div>
    </footer>
  );
}
