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
import { Spinner } from "../../../../components/Spinner";
import emptyStateImage from "../../../../../assets/empty-state.svg";

export function Transactions() {
  const { areValuesVisible, isInitialLoading, isLoading, transactions } =
    useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl w-full h-full md:p-10 px-4 py-8">
      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {!isInitialLoading && (
        <>
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
          <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Spinner />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex flex-col justify-center items-center h-full">
                <img src={emptyStateImage} alt="Empty state image" />
                <p className="text-gray-700">
                  Nao encontramos nenhuma transação!
                </p>
              </div>
            )}
            {hasTransactions && !isLoading && (
              <>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon type="EXPENSE" />
                    <div className="flex flex-col">
                      <strong className="font-bold tracking-[-0.5px]">
                        Rango
                      </strong>
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
                      <strong className="font-bold tracking-[-0.5px]">
                        Freela
                      </strong>
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
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
