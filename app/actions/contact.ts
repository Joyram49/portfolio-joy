"use server";

import { sendContactUsEmail } from "@/services/sendContactUsEmail";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.email({ error: "Please enter a valid email address" }),
  content: z.string().min(10).max(200),
});

export async function submitContactForm(data: unknown) {
  const parsed = ContactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  await sendContactUsEmail(parsed.data);

  return {
    success: true,
    message: "Message sent successfully",
  };
}
