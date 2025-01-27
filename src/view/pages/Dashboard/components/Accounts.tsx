import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountsCard } from "./AccountCard";

export function Accounts() {
  return (
    <div className="flex flex-col bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8">
      <div>
        <span className="text-white tracking-[-0.5px] block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-end flex-1">
        <div className="flex items-center justify-between">
          <strong className="text-white text-lg tracking-[-1px]">
            Minhas contas
          </strong>
          <div>
            <button
              disabled
              className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
            >
              <ChevronLeftIcon className="text-white w-6 h-6 " />
            </button>
            <button className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
              <ChevronRightIcon className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <AccountsCard
            name="Nubank"
            color="#7950f2"
            balance={1000}
            type="CASH"
          />
          <AccountsCard
            name="Xp"
            color="#333"
            balance={1000}
            type="INVESTMENT"
          />
          <AccountsCard
            name="C6 Bank"
            color="#0f0"
            balance={1000}
            type="CHECKING"
          />
        </div>
      </div>
    </div>
  );
}
