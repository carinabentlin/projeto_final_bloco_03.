import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import Slide01 from "./Slide01";
import Slide02 from "./Slide02";
import Slide03 from "./Slide03";

function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setSlidesCount(emblaApi.scrollSnapList().length);

    emblaApi.on("select", updateIndex);
    updateIndex();

    return () => {
      emblaApi.off("select", updateIndex);
    };
  }, [emblaApi]);

  function scrollTo(index: number) {
    emblaApi?.scrollTo(index);
  }

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <div className="relative md:max-h-[60vh] max-h-[45vh] mt-6">

      {/* ÁREA CONTROLADA PELO EMBLA */}
      <div className="overflow-hidden group" ref={emblaRef}>
        <div className="flex">

          {/* SLIDE 01 */}
          <div className="flex-[0_0_100%]">
            <Slide01 />
          </div>

          {/* SLIDE 02 */}
          <div className="flex-[0_0_100%]">
            <Slide02 />
          </div>

          {/* SLIDE 03 */}
          <div className="flex-[0_0_100%]">
            <Slide03 />
          </div>

        </div>

        {/* BOTÃO ANTERIOR */}
        <button
          className="cursor-pointer hidden md:flex items-center justify-center 
          w-12 h-12 absolute left-3 top-1/2 -translate-y-1/2 z-10 
          opacity-0 group-hover:opacity-100 transition"
          onClick={scrollPrev}
        >
          <CaretLeftIcon size={40} className="text-white drop-shadow-xl" />
        </button>

        {/* BOTÃO PRÓXIMO */}
        <button
          className="cursor-pointer hidden md:flex items-center justify-center 
          w-12 h-12 absolute right-3 top-1/2 -translate-y-1/2 z-10 
          opacity-0 group-hover:opacity-100 transition"
          onClick={scrollNext}
        >
          <CaretRightIcon size={40} className="text-white drop-shadow-xl" />
        </button>
      </div>

      {/* DOTS DE NAVEGAÇÃO */}
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
        {[...Array(slidesCount)].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              selectedIndex === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrossel;
