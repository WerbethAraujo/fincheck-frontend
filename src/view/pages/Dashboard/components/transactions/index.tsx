import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoriesIcons";
import { useTransactionsController } from "./useTransactionsController";
import { cn } from "../../../../../app/utils/cn";

export function Transactions() {
  const { areValuesVisible } = useTransactionsController();

  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl w-full h-full md:p-10 px-4 py-8">
      <header>
        <div className=" flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <SliderNavigation />
          <Swiper slidesPerView={3} centeredSlides>
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>
      <div className="mt-4 space-y-3 flex-1">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3">
            <CategoryIcon type="EXPENSE" />
            <div className="flex flex-col">
              <strong className="font-bold tracking-[-0.5px]">Rango</strong>
              <span className="text-sm text-gray-600">10/04/1991</span>
            </div>
          </div>
          <span
            className={cn(
              "font-medium text-red-800 tracking-[-0.5px]",
              !areValuesVisible && "blur-sm"
            )}
          >
            {formatCurrency(123)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3">
            <CategoryIcon type="INCOME" />
            <div className="flex flex-col">
              <strong className="font-bold tracking-[-0.5px]">Freela</strong>
              <span className="text-sm text-gray-600">10/04/1991</span>
            </div>
          </div>
          <span
            className={cn(
              "font-medium text-green-800 tracking-[-0.5px]",
              !areValuesVisible && "blur-sm"
            )}
          >
            {formatCurrency(250)}
          </span>
        </div>
      </div>
    </div>
  );
}
