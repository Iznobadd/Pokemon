import { z } from "zod";

export type LoginData = {
  email: string;
  password: string;
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
