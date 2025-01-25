import { useAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components/Button";

export function Dashborad() {
  const { signout } = useAuth();
  return (
    <div className="flex items-center justify-between px-10">
      <h1 className="bg-red-500 h-10">Dashboard</h1>
      <Button onClick={signout}>Sair</Button>
    </div>
  );
}
