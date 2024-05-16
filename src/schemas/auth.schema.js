import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: " usuario es requerido",
  }),

  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: " Email invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(6, {
      message: "Contraseña debe ser almenos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "email es requerido",
    })
    .email({
      message: "email invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe ser almenos de 6 caracteres",
    }),
});
