import Carrossel from "../../components/carrossel/Carrossel";

function Home() {
  return (
    <>
      {/* HERO */}
      <div className="bg-[#2CA6A6] flex justify-center py-12 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center text-white px-6 gap-12">

          {/* TEXTOS */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
              Farmácia On
            </h2>

            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-md text-center md:text-start">
              Tudo o que você precisa a um clique!
            </p>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://ik.imagekit.io/sv3txjrcv/Farmacia/ChatGPT%20Image%202%20de%20dez.%20de%202025,%2009_37_16.png"
              alt="Imagem Página Home"
              className="w-3/4 md:w-full lg:w-4/5 object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* CARROSSEL */}
      <section className="bg-[#2CA6A6] pt-6 pb-12">
        <Carrossel />
      </section>
    </>
  );
}

export default Home;
