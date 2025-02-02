import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
      </button>
      <button
        onClick={() => swiper.slideNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-900" />
      </button>
    </>
  );
}
