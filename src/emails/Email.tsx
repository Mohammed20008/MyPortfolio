/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => (
  <Html className="bg-green-400">
    <Button>click me</Button>
    <h1>{message}!</h1>
  </Html>
);
