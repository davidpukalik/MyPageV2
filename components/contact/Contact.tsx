import React from "react";
import StyledContact from "../../styles/contact/StyledContact";
import Container from "../../styles/shared/Container";
import Flex from "../../styles/shared/Flex";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

interface Props {
  locale: any;
}

const Contact: React.FC<Props> = ({ locale: t }) => {
  return (
    <StyledContact id="contact">
      <Container>
        <h4>{t.Contact.Subtitle}</h4>
        <h2>{t.Contact.Title}</h2>
        <form>
          <Flex justifyContent="space-between" alignItems="center" className="form-control">
            <TextField
              id="input-with-icon-textfield"
              label={t.Contact.Name}
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
            <TextField
              id="input-with-icon-textfield"
              label={t.Contact.Email}
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
            <TextField
              id="input-with-icon-textfield"
              label={t.Contact.Subject}
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
          </Flex>
          <Flex className="form-control">
            <TextField
              id="outlined-multiline-static"
              label={t.Contact.Message}
              multiline
              rows={8}
              sx={{ width: "100%" }}
            />
          </Flex>
          <Flex justifyContent="flex-end">
            <Button color="primary" variant="outlined">
              {t.Contact.Send}
            </Button>
          </Flex>
        </form>
      </Container>
    </StyledContact>
  );
};

export default Contact;
