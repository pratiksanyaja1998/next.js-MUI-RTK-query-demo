import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  Checkbox,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function Home() {
  const handleClick = () => {};
  return (
    <>
      <Head>
        <title> Login | Minimal UI </title>
      </Head>
      <StyledContent>
        <Container maxWidth="sm">
          <Stack spacing={3}>
            <TextField name="email" label="Email address" />

            <TextField name="password" label="Password" type={"password"} />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleClick}
            >
              Login
            </LoadingButton>
          </Stack>
        </Container>
      </StyledContent>
    </>
  );
}
