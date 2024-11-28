import { z } from "zod";

export interface TUser {
  email: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(4),
    newPassword: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
