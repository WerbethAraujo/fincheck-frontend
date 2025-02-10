import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/accounts";
import { DashboradProvider } from "./components/dashboardContext";
import { Fab } from "./components/fab";
import { Transactions } from "./components/transactions";

export function Dashborad() {
  return (
    <DashboradProvider>
      <div className="flex flex-col h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 gap-4">
        <header className="flex items-center justify-between h-12">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>

        <main className="flex flex-1 flex-col md:flex-row gap-4 max-w-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>
        <Fab />
      </div>
    </DashboradProvider>
  );
}
