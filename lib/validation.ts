import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().min(1).max(255),
  message: z.string().min(1)
});

export { contactSchema };
