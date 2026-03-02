import { render } from "@react-email/render";
import { sendEmail } from "@/lib/utils/sendEmail";
import ContactUsEmail from "./template/ContactUsEmail";

interface SendContactEmailArgs {
  name: string;
  email: string;
  content: string;
}

export async function sendContactUsEmail({
  name,
  email,
  content,
}: SendContactEmailArgs) {
  const html = await render(
    ContactUsEmail({
      name,
      email,
      content,
      appName: "Portfolio",
    }),
  );

  await sendEmail({
    to: "joyram2015@gmail.com",
    subject: `New Contact Message from ${name}`,
    html,
  });
}
