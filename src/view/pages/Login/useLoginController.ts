import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { SigninParams } from "../../../app/services/authService/signin";
import toast from "react-hot-toast";
import { authService } from "../../../app/services/authService";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório!")
    .email("Informe um e-mail válido!"),
  password: z
    .string()
    .nonempty("A senha não pode ser vazia!")
    .min(8, "Sua senha precisa ter no mínimo 8 caracteres!"),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signin(accessToken);
    } catch {
      toast.error("Credenciais inválidas!");
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
