import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/locakStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersSevice } from "../services/usersService";
import { httpClient } from "../services/httpClient";

interface AuthContextValue {
  signedIn: boolean;
  signout(): void;
  signin(accessToken: string): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return !!storedAccessToken;
  });

  useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersSevice.me(),
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
