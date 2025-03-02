import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, {message: "Name have cantain at least tqo symbols"}),
  lastName: z.string().min(2, {message: "LastName have cantain at least tqo symbols"}),
  email: z.string().email({message: "Invalid email"}),
  phone: z.string().min(10, {message: "Phone number have to be correct"}),
  address: z.string().min(5, {message: "Address have to be correct"}),
  comment: z.string().optional(),
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>