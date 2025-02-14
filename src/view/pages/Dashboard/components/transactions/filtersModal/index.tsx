import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../../app/utils/cn";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

const mockedBankAccounts = [
  {
    id: "1",
    name: "Nunbank",
  },
  {
    id: "2",
    name: "XP Invetimentos",
  },
  {
    id: "3",
    name: "C6 Bank",
  },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectedBankAccount,
    handleChangeYear,
    selectedYear,
  } = useFiltersModal();

  return (
    <Modal open={open} title="Filtros" onClose={onClose}>
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gary-800">
          Conta
        </span>
        <div className="space-y-2 mt-2">
          {mockedBankAccounts.map((account) => (
            <button
              key={account.id}
              onClick={() => handleSelectedBankAccount(account.id)}
              className={cn(
                "w-full text-left p-2 hover:bg-gray-50 rounded-2xl text-gray-800 transition-colors",
                account.id === selectedBankAccountId && "!bg-gray-200"
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <span className="text-lg tracking-[-1px] font-bold text-gary-800">
          Ano
        </span>

        <div className="mt-2 w-52 flex items-center justify-between">
          <button
            onClick={() => handleChangeYear(-1)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>
          <button
            onClick={() => handleChangeYear(1)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <Button className="mt-10 w-full">Aplicar Filtros</Button>
    </Modal>
  );
}
