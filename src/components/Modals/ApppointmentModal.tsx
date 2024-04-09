import React from "react";
import { useModal } from "@/components/Modal";
import { isModalOpen } from "@/stores/modalStore";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { addHours, getHours, startOfTomorrow } from "date-fns";
import { de } from "date-fns/locale/de";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { Resend } from "resend";
// import AppointmentMail from "@/emails/AppointmentMail";

// const resend = new Resend(process.env.RESEND_API_KEY);

const AppointmentContent = () => {
  // const sendRequestMail = async () => {
  //   resend.emails.send({
  //     from: "isekkumusic@gmail.com",
  //     to: "eric.arszelewski@gmail.com",
  //     subject: "New appointment request",
  //     react: <AppointmentMail userFirstname={name} />,
  //   });
  // };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (defaultTimeValidator) {
      // sendRequestMail();
      localStorage.clear();
      isModalOpen.set(false);
    }
  };

  const handleClose = () => {
    isModalOpen.set(false);
  };

  const defaultValueTime =
    getHours(Date.now()) <= 12 ? addHours(Date.now(), 1) : startOfTomorrow();

  const [name, setName] = useSessionStorage("name", "");
  const [email, setEmail] = useSessionStorage("email", "");
  const [message, setMessage] = useSessionStorage("message", "");
  const [time, setTime] = useSessionStorage("time", defaultValueTime);

  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const [timeError, setTimeError] = React.useState(false);

  const defaultTimeValidator = time >= defaultValueTime;

  React.useEffect(() => {
    console.log("error?:", timeError);
    console.log("time:", time);
    console.log("defaulttime:", defaultValueTime);
  }, [timeError]);

  return (
    <>
      <form id="formId" onSubmit={handleSubmit} method="post">
        <DialogContent className="flex flex-col gap-4" dividers>
          <TextField
            required
            value={name}
            type="text"
            name="name"
            label="Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
              if (event.target.validity.valid) {
                setNameError(false);
              } else {
                setNameError(true);
              }
            }}
            autoFocus
            inputProps={{ maxLength: 50 }}
            error={nameError}
            helperText={nameError ? "Please enter your name" : ""}
          ></TextField>
          <TextField
            required
            value={email}
            type="email"
            name="email"
            label="Email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
              if (event.target.validity.valid) {
                setEmailError(false);
              } else {
                setEmailError(true);
              }
            }}
            inputProps={{ maxLength: 50 }}
            error={emailError}
            helperText={emailError ? "Invalid email address" : ""}
          ></TextField>
          <TextField
            required
            value={message}
            type="text"
            name="message"
            label="Message"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value);
              if (event.target.validity.valid) {
                setMessageError(false);
              } else {
                setMessageError(true);
              }
            }}
            multiline
            inputProps={{ maxLength: 500 }}
            error={messageError}
            helperText={messageError ? "Please enter a message" : ""}
          ></TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
            <DateTimePicker
              disablePast
              minDateTime={defaultValueTime}
              label="Time"
              value={time}
              name="time"
              onChange={(newValue) => {
                setTime(newValue);
              }}
              onError={() =>
                defaultTimeValidator ? setTimeError(false) : setTimeError(true)
              }
              slotProps={{
                textField: {
                  error: timeError,
                  required: true,
                  helperText: timeError
                    ? getHours(Date.now()) <= 12
                      ? "Select date after 12"
                      : "Select date starting tomorrow"
                    : "",
                },
              }}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </>
  );
};

export const AppointmentModal = () => {
  useModal({
    open: true,
    title: "Schedule appointment",
    content: <AppointmentContent />,
  });
};
