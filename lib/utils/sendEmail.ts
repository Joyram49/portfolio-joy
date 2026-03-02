import { smtpTransport } from "./smtpTransport";

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  await smtpTransport.sendMail({
    from: `"Portfolio" <${process.env.SMTP_FROM}>`,
    to,
    subject,
    html,
  });
}
