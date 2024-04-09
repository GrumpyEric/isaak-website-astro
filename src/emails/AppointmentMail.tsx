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

interface AppointmentMailProps {
  userFirstname: string;
}

export const AppointmentMail = ({ userFirstname }: AppointmentMailProps) => (
  <Html>
    <Head />
    <Preview>Appointment with {userFirstname}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi Isaak,</Text>
        <Text style={paragraph}>
          {userFirstname} (*email address*) would want to schedule an
          appointment with you:
        </Text>
        <Text style={paragraph}>(*add message*)</Text>
        <Text style={paragraph}>Time: (*time*)</Text>
        <Section style={btnContainer}>
          {/* <Button style={button} href="https://getkoala.com">
            Get started
          </Button> */}
        </Section>
      </Container>
    </Body>
  </Html>
);

AppointmentMail.PreviewProps = {
  userFirstname: "Alan",
} as AppointmentMailProps;

export default AppointmentMail;

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
