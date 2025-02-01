import { formatCurrency } from "../../../../../app/utils/formatCurrency";

interface AccountCardProps {
  name: string;
  color: string;
  balance: number;
  type: "CASH" | "CHECKING" | "INVESTMENT";
}

export function AccountsCard({ name, color, balance, type }: AccountCardProps) {
  return (
    <div
      className="p-4 bg-white rounded-lg h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px] block mt-4">
          {name}
        </span>
      </div>
      <div>
        <span className="text-gray-800 font-medium tracking-[-0.5px] block">
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
import { BankAccountTypeIcon } from "../../../../components/icons/bankAccountTypeIcon";
