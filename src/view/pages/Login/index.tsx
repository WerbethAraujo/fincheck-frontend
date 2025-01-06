import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export function Login() {
  return (
    <div>
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="tracking-[-0.5px] font-medium text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <form className="mt-[60px] flex flex-col gap-4">
        <Input type="email" />
        <Input type="password" />
        <button type="submit" className="bg-teal-900 text-white">
          Entrar
        </button>
      </form>
    </div>
  );
}
