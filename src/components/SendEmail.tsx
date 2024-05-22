"use server";

import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_EMAIL);
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
      subject: "ddddd",
      text: message,
      // react: <Welcome />,
    });
  } catch (error) {
    console.log(error);
  }
  return {
    data,
  };
};
