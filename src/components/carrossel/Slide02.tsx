function Slide02() {
  return (
    <div className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center">

      {/* IMAGEM */}
      <img
        src="https://ik.imagekit.io/sv3txjrcv/imagens_usuarios/Farmacia/pexels-mart-production-8450512.webp"
        alt="Linha de Florais"
        className="w-full h-full object-cover"
      />

      {/* OVERLAY GRADIENT (mesmo efeito do Slide01) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b7f7aa0] via-[#1b7f7a40] to-transparent"></div>

      {/* TEXTOS */}
      <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 text-white max-w-[300px] md:max-w-[450px]">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-xl">
          Florais & Bem-Estar
        </h2>

        <p className="mt-2 text-lg md:text-xl drop-shadow">
          Cuide do seu bem-estar: linha completa de florais para o seu dia a dia.
        </p>

        {/* BOTÃO CTA */}
        <a
          href="/produtos"
          className="inline-block mt-4 bg-white text-[#1b7f7a] px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold shadow hover:bg-[#f1f1f1] transition"
        >
          Ver Florais →
        </a>
      </div>

    </div>
  );
}

export default Slide02;
