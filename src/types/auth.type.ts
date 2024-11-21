import { z } from "zod";

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
};

export type JwtToken = {
  email: string;
  sub: string;
  role: string;
  iat: number;
  exp: number;
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
