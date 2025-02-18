import { createContext, useCallback, useState } from "react";

interface DashboradContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: "INCOME" | "EXPENSE" | null;
  handleOpenNewTransactionModal(type: "INCOME" | "EXPENSE"): void;
  toggleValuesVisibility(): void;
  handleOpenNewAccountModal(): void;
  handleCloseNewAccountModal(): void;
  handleCloseNewTransactionModal(): void;
}

export const DashboradContext = createContext({} as DashboradContextValue);

export function DashboradProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [newTransactionType, setNewTransactionType] = useState<
    "INCOME" | "EXPENSE" | null
  >(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const handleOpenNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const handleCloseNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const handleOpenNewTransactionModal = useCallback(
    (type: "INCOME" | "EXPENSE") => {
      setNewTransactionType(type);
      setIsNewTransactionModalOpen(true);
    },
    []
  );

  const handleCloseNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboradContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
        isNewAccountModalOpen,
        handleOpenNewAccountModal,
        handleCloseNewAccountModal,
        isNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
        newTransactionType,
      }}
    >
      {children}
    </DashboradContext.Provider>
  );
}
