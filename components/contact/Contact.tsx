import React, { useState } from "react";
import StyledContact from "../../styles/contact/StyledContact";
import Container from "../../styles/shared/Container";
import Flex from "../../styles/shared/Flex";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

interface Props {
  locale: any;
}

interface IFormInputs {
  fullname: string;
  email: string;
  subject: string;
  message: string;
  recaptcha: string;
}

const Contact: React.FC<Props> = ({ locale: t }) => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>();
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string }>({
    type: "success",
    text: "default",
  });
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmitForm: SubmitHandler<IFormInputs> = async (values) => {
    if (values.recaptcha === "6") {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/contact"}`,
          { ...values },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status >= 200 && res.status < 300) {
          setOpen(true);
          setStatusMessage({ type: res.data.messageStatusRes, text: t.Contact.MailSuccess });
          reset();
        } else {
          setOpen(true);
          setStatusMessage({ type: "error", text: t.Contact.SomethingWentWrong });
        }
      } catch (err: any) {
        setOpen(true);
        setStatusMessage({ type: err.response.data.messageStatusRes, text: t.Contact.MailError });
      }
    } else {
      setOpen(true);
      setStatusMessage({ type: "error", text: "Antispam..." });
    }
  };

  return (
    <StyledContact id="contact">
      <Container>
        <h4>{t.Contact.Subtitle}</h4>
        <h2>{t.Contact.Title}</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Flex justifyContent="space-between" alignItems="center" className="form-control form-information">
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: t.Contact.RequiredField,
                },
                minLength: {
                  value: 2,
                  message: t.Contact.MinLength,
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  id="input-with-icon-textfield"
                  {...field}
                  {...field.ref}
                  label={t.Contact.Name}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  color="primary"
                  sx={{ width: "23%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: t.Contact.RequiredField,
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: t.Contact.ValidEmail,
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  id="input-with-icon-textfield"
                  {...field}
                  label={t.Contact.Email}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  color="primary"
                  sx={{ width: "23%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              )}
            />

            <Controller
              name="subject"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: t.Contact.RequiredField,
                },
                minLength: {
                  value: 2,
                  message: t.Contact.MinLength,
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  id="input-with-icon-textfield"
                  {...field}
                  name=""
                  label={t.Contact.Subject}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  color="primary"
                  sx={{ width: "23%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              )}
            />
          </Flex>
          <Flex className="form-control">
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: t.Contact.RequiredField,
                },
                minLength: {
                  value: 2,
                  message: t.Contact.MinLength,
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  id="outlined-multiline-static"
                  label={t.Contact.Message}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  multiline
                  rows={8}
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Flex>
          <Flex justifyContent="flex-end" alignItems="center" className="form-control form-submit">
            <Controller
              name="recaptcha"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: t.Contact.RequiredField,
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  id="input-with-icon-textfield"
                  {...field}
                  name=""
                  label={t.Contact.Recaptcha}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  color="primary"
                  sx={{ width: "23%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SmartToyIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              )}
            />
            <Button color="primary" variant="outlined" type="submit" sx={{ marginLeft: "1em" }}>
              {t.Contact.Send}
            </Button>
          </Flex>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={statusMessage.type} sx={{ width: "100%" }}>
              {statusMessage.text}
            </Alert>
          </Snackbar>
        </form>
      </Container>
    </StyledContact>
  );
};

export default Contact;
