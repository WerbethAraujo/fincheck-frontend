import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../../../app/services/authService/signup";

import { toast } from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z
    .string()
    .email("Informe um e-mail válido")
    .nonempty("E-mail é obrigatório"),
  password: z
    .string()
    .nonempty("Senha é obrigatoria")
    .min(8, "Sua senha precisa conter pelo menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signin(accessToken);
    } catch {
      toast.error("Ocorreu um erro ao criar sua conta!");
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
