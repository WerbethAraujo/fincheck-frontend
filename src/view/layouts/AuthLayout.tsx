import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <div>Auth Layout</div>
      <Outlet />
    </>
  );
}
