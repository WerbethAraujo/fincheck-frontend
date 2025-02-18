import { Button } from "../../../../components/Button";
import { ColorsDropdownButton } from "../../../../components/ColorsDropdownButton";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    newTransactionType,
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      open={isNewTransactionModalOpen}
      title={isExpense ? "Nova Despesa" : "Nova Receita"}
      onClose={handleCloseNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">
            Valor{isExpense ? "da despesa" : "da receita"}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? "Nome da despesa" : "Nome da receita"}
          />

          <Select
            placeholder="Categoria"
            options={[
              {
                value: "INVESTMENT",
                label: "Investimentos",
              },

              {
                value: "CHECKING",
                label: "Conta Corrente",
              },

              {
                value: "CASH",
                label: "Dinheiro Físico",
              },
            ]}
          />

          <Select
            placeholder={isExpense ? "Pagar com:" : "Receber com:"}
            options={[
              {
                value: "INVESTMENT",
                label: "Investimentos",
              },

              {
                value: "CHECKING",
                label: "Conta Corrente",
              },

              {
                value: "CASH",
                label: "Dinheiro Físico",
              },
            ]}
          />

          <DatePickerInput />
        </div>
        <Button className="mt-4 w-full">Criar</Button>
      </form>
    </Modal>
  );
}
