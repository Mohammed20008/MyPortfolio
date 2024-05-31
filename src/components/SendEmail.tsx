"use server";

// import { EmailTemplate } from "@/emails/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);
export const sendEmail = async (FormData: FormData) => {
  const message = FormData.get("message");
  const sender = FormData.get("email");
  if (typeof message !== "string") {
    return { error: console.log("error") };
  }
  if (typeof sender !== "string") {
    return { error: "invalid message" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Mohammed<onboarding@resend.dev>",
      to: "mohammedabdalmenem1@gmail.com",
      reply_to: sender,
      subject: "New message",
      text: message,
      // react: EmailTemplate({ message: message }),
    });
  } catch (error) {
    console.log(error);
  }
  return {
    data,
  };
};
