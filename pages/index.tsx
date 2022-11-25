import { useEffect, useState } from "react";
import Head from "next/head";
import { Container, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { store } from "../store";
import { setUser } from "../store/reducer";
import { useSelector } from 'react-redux'
import Router from "next/router";

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
  const auth = useSelector((state: any) => state.auth)
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: ""
  });

  const handleClick = () => {
    console.log("userCredential->", userCredential);
    store.dispatch(setUser(userCredential));
  };
  useEffect(() => {
    console.log("auth", auth);
    if (auth) {
      Router.replace("/dashboard")
    }
  }, [auth]);


  return (
    <>
      <Head>
        <title> Login | Minimal UI </title>
      </Head>
      <StyledContent>
        <Container maxWidth="sm">
          <Stack spacing={3}>
            <TextField name="email" label="Email address" onChange={(e) => setUserCredential({ ...userCredential, email: e.target.value })} />
            <TextField name="password" label="Password" type={"password"} onChange={(e) => setUserCredential({ ...userCredential, password: e.target.value })} />
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
          <div style={{ textAlign: "center" }}>
            <Link href="/signup">Sign Up</Link>
          </div>
        </Container>
      </StyledContent>
    </>
  );
}
