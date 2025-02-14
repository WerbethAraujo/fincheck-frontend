import { useDashboard } from "../../components/dashboardContext/useDashboard";

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, handleCloseNewAccountModal } = useDashboard();

  return {
    isNewAccountModalOpen,
    handleCloseNewAccountModal,
  };
}
