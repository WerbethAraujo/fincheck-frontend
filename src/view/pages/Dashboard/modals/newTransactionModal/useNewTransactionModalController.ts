import { useDashboard } from "../../components/dashboardContext/useDashboard";

export function useNewTransactionModalController() {
  const {
    newTransactionType,
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
  } = useDashboard();

  return {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    newTransactionType,
  };
}
