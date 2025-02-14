import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { CategoryIcon } from "../../../../components/icons/categories/CategoriesIcons";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";
import { useDashboard } from "../dashboardContext/useDashboard";

export function Fab() {
  const { handleOpenNewAccountModal } = useDashboard();

  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className=" bg-teal-900 w-12 h-12
          rounded-full flex items-center justify-center text-white"
          >
            <PlusIcon className="w-4 h-6" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="z-50">
          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="EXPENSE" />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="INCOME" />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="gap-2"
            onSelect={handleOpenNewAccountModal}
          >
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
