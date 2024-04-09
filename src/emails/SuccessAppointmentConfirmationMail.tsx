import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface sentAppointmentConfirmationMailProps {
  userFirstname: string;
}

export const successAppointmentConfirmationMail = ({
  userFirstname,
}: sentAppointmentConfirmationMailProps) => (
  <Html>
    <Head />
    <Preview>Appointment with {userFirstname}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          {userFirstname} your request for an appointment has been sent
          successfully!
        </Text>
        <Text style={paragraph}>
          Now you wait for an answer from Isekku to get started!
        </Text>
      </Container>
    </Body>
  </Html>
);

successAppointmentConfirmationMail.PreviewProps = {
  userFirstname: "Alan",
} as sentAppointmentConfirmationMailProps;

export default successAppointmentConfirmationMail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};
