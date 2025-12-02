import Carrossel from "../../components/carrossel/Carrossel";

function Home() {
  return (
    <>
      <div className="bg-[#2CA6A6] flex justify-center py-10 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center text-white px-4 gap-10">
          
          {/* TEXTOS */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
              Farmácia On
            </h2>

            <p className="text-lg md:text-xl text-center md:text-left">
              Tudo o que você precisa a um clique!
            </p>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/sv3txjrcv/Farmacia/ChatGPT%20Image%202%20de%20dez.%20de%202025,%2009_37_16.png"
              alt="Imagem Página Home"
              className="w-3/4 md:w-4/5 lg:w-3/4 object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
	   {/* CARROSSEL  */}
      <section className="bg-[#2CA6A6] ">
        <Carrossel />
      </section>
    </>
  );
}

export default Home;
