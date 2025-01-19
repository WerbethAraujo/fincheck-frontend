import { useContext } from "react";
import { AuthContext } from "../contexts/AuthCotext";

export function useAuth() {
  return useContext(AuthContext);
}
