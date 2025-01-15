import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";

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

  const handleSubmit = hookFormSubmit(async (data) => {
    const { accessToken } = await authService.signup(data);

    console.log(accessToken);
  });

  return { handleSubmit, register, errors };
}
