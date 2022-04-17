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

const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <h4>Contact</h4>
        <h2>Get In Touch</h2>
        <form>
          <Flex justifyContent="space-between" alignItems="center" className="form-control">
            <TextField
              id="input-with-icon-textfield"
              label="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              id="input-with-icon-textfield"
              label="E-mail"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              id="input-with-icon-textfield"
              label="Subject"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Flex>
          <Flex className="form-control">
            <TextField id="outlined-multiline-static" label="Message" multiline rows={6} sx={{ width: "100%" }} />
          </Flex>
          <Flex justifyContent="flex-end">
            <Button variant="outlined">Send Message</Button>
          </Flex>
        </form>
      </Container>
    </StyledContact>
  );
};

export default Contact;
