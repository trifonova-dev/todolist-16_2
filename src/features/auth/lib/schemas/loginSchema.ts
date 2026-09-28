import { z } from "zod/v4"

export type LoginInputs = z.infer<typeof loginSchema>

export const loginSchema = z.object({
  email: z.email({ error: "Email is required" }),
  password: z.string(),
  rememberMe: z.boolean(),
})
