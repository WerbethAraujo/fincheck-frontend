import { createContext, useCallback, useState } from "react";

interface DashboradContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
  isNewAccountModalOpen: boolean;
  handleOpenNewAccountModal(): void;
  handleCloseNewAccountModal(): void;
}

export const DashboradContext = createContext({} as DashboradContextValue);

export function DashboradProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const handleOpenNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const handleCloseNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  return (
    <DashboradContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
        handleOpenNewAccountModal,
        isNewAccountModalOpen,
        handleCloseNewAccountModal,
      }}
    >
      {children}
    </DashboradContext.Provider>
  );
}
