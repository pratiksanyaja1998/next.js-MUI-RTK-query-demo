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

export default function Signup() {
    const auth = useSelector((state: any) => state.auth)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);


    const StyledContent = styled("div")(({ theme }) => ({
        maxWidth: 480,
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing(12, 0),
    }));
    const handleClick = () => {
        setLoading(true)
        store.dispatch(setUser({email,password}));
    };
    useEffect(()=> {
        if (auth) {
            Router.replace("/dashboard")
            setTimeout(()=> { setLoading(false)}, 1000)
        }    
    }, [auth]);
    
    return (
        <>
            <Head>
                <title> SignUp </title>
            </Head>
            <StyledContent>
                <Container maxWidth="sm">
                    <Stack spacing={3}>
                        <TextField label="Email address" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" type={"password"} defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                        <LoadingButton
                            fullWidth
                            loading={loading}
                            size="large"
                            type="submit"
                            variant="contained"
                            onClick={handleClick}
                        >
                            Sign Up
                        </LoadingButton>
                    </Stack>
                    <div style={{ textAlign: "center" }}>
                        <Link href="/">Login</Link>
                    </div>
                </Container>
            </StyledContent>
        </>
    )
};
