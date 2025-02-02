import { useContext } from "react";
import { DashboradContext } from ".";

export function useDashboard() {
  return useContext(DashboradContext);
}
