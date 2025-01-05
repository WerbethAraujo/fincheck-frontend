import { Outlet } from "react-router-dom";
import illustration from "../../assets/illustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className=" w-1/2 h-full flex flex-col justify-center items-center gap-16">
        <Logo className="text-gray-500 h-8" />
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center p-8 relative">
        <img
          src={illustration}
          alt="banner login and register page"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />

        <div className="max-w-[656px] bg-white p-10 absolute rounded-b-[32px] bottom-8 text-red-700">
          <Logo className=" text-teal-900 h-8" />
          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            eo melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
