import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountsCard } from "./AccountCard";
import { AccountsSliderNav } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn } from "../../../../../app/utils/cn";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
  } = useAccountsController();

  return (
    <div className="flex flex-col bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8">
      <div>
        <span className="text-white tracking-[-0.5px] block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong
            className={cn(
              "text-2xl tracking-[-1px] text-white",
              !areValuesVisible && "blur-md"
            )}
          >
            R$ 1000,00
          </strong>
          <button
            onClick={toggleValuesVisibility}
            className="w-8 h-8 flex items-center justify-center"
          >
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-end flex-1 mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.15}
            onSlideChange={(swiper) => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              });
            }}
          >
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white text-lg tracking-[-1px]">
                Minhas contas
              </strong>
              <AccountsSliderNav
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountsCard
                name="Nubank"
                color="#7950f2"
                balance={1000}
                type="CASH"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountsCard
                name="Xp"
                color="#333"
                balance={1000}
                type="INVESTMENT"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountsCard
                name="C6 Bank"
                color="#0f0"
                balance={1000}
                type="CHECKING"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
