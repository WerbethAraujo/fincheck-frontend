import { createContext, useCallback, useState } from "react";

interface DashboradContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
}

export const DashboradContext = createContext({} as DashboradContextValue);

export function DashboradProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  return (
    <DashboradContext.Provider
      value={{ areValuesVisible, toggleValuesVisibility }}
    >
      {children}
    </DashboradContext.Provider>
  );
}
