import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center justify-center bg-teal-50 rounded-full w-12 h-12 border border-teal-200">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
            WA
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          onSelect={signout}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
