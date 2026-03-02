import nodemailer from "nodemailer";

import { envConfig } from "@/config/envConfig";

export const smtpTransport = nodemailer.createTransport({
  host: envConfig.smtpHost,
  port: Number(envConfig.smtpPort),
  secure: envConfig.smtpPort === "465", // true for 465, false for 587
  auth: {
    user: envConfig.smtpUser,
    pass: envConfig.smtpPass,
  },
});
