import z from "zod";

export const loginInput = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type ILogin = z.infer<typeof loginInput>;

export const registerInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type IRegister = z.infer<typeof registerInput>;
