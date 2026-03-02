import { envConfig } from "@/config/envConfig";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Img,
} from "@react-email/components";

interface ContactUsEmailProps {
  name: string;
  email: string;
  content: string;
  appName?: string;
}

const logoUrl = `${envConfig.appBaseUrl}/logo-car.png`;

export default function ContactUsEmail({
  name,
  email,
  content,
  appName = "Portfolio",
}: ContactUsEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={iconWrapper}>
            <Img src={logoUrl} alt={`${appName} logo`} width="48" height="48" />
          </Section>

          <Heading style={heading}>{appName}</Heading>
          <Text style={subtitle}>New Contact Request</Text>

          <Section style={contentWrapper}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>

            <Hr style={divider} />

            <Text style={label}>Message</Text>
            <Text style={message}>{content}</Text>
          </Section>

          <Hr style={divider} />

          <Text style={footer}>
            This message was sent from the contact form on {appName}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------------- Styles ---------------- */

const main = {
  backgroundColor: "#f4f6fb",
  fontFamily:
    "Lufga, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "36px 32px",
  borderRadius: "14px",
  maxWidth: "420px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const iconWrapper = {
  textAlign: "center" as const,
  marginBottom: "12px",
};

const heading = {
  textAlign: "center" as const,
  fontSize: "22px",
  fontWeight: "700",
  color: "#111827",
};

const subtitle = {
  textAlign: "center" as const,
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "24px",
};

const contentWrapper = {
  padding: "0 4px",
};

const label = {
  fontSize: "12px",
  color: "#6b7280",
  marginBottom: "4px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
};

const value = {
  fontSize: "14px",
  color: "#111827",
  marginBottom: "16px",
};

const message = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "22px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footer = {
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center" as const,
};
