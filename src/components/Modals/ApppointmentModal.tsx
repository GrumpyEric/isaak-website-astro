import React from "react";
import { useModal } from "@/components/Modal";
import { isModalOpen } from "@/stores/modalStore";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { router } from "@/app";
import { Link, useNavigate } from "@tanstack/react-router";

const AppointmentContent = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [time, setTime] = React.useState<number>(Date.now);

  // const navigate = useNavigate();

  // const handleCloseModal = () => {
  //   navigate({ to: "/" });
  // };

  function handleSubmitModal() {}

  return (
    <>
      <DialogContent className="flex flex-col gap-4" dividers>
        <TextField
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          autoFocus
          label="Your name"
        ></TextField>
        <TextField
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          label="Your email"
        ></TextField>
        <TextField
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
          multiline
          label="Message"
        ></TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Time"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            format="dd.MM.yyy hh:mm aa"
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button
        // onClick={() => handleCloseModal()}
        >
          close
        </Button>
        {/* <a href="mailto:eric.arszelewski@gmail.com">Click to Send an Email</a> */}
        {/* <Button LinkComponent={"a"} href="mailto:eric.arszelewski@gmail.com">
          Submit
        </Button> */}
        <Button
          onClick={() =>
            console.log({
              name: name,
              email: email,
              message: message,
              time: time,
            })
          }
        >
          Submit
        </Button>
      </DialogActions>
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
