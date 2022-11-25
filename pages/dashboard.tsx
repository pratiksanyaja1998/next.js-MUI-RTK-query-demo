import { useEffect, useState } from "react";
import Head from "next/head";;
import { CircularProgress, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useGetUsersQuery } from "../store/userSlice";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'
import Router from "next/router";



const Dashboard = () => {
  const StyledContent = styled("div")(({ theme }) => ({
    // maxWidth: 700,
    margin: "auto",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(12, 0),
  }));

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const auth = useSelector((state: any) => state.auth)
  const getUserQuery = useGetUsersQuery("users")

  useEffect(() => {
    if (!auth) {
      Router.push("/signup")
    }
  }, [])

  useEffect(() => {
    
    if (getUserQuery?.status == "fulfilled") {
      console.log("response", getUserQuery);
      setUserList(getUserQuery?.data)
      setTimeout(() => { setLoading(false)}, 1000)
    }
    setTimeout(() => { setLoading(false)}, 1000)
  }, [getUserQuery]);

  return (
    <>
      <Head>
        <title> Dashboard </title>
      </Head>
      <StyledContent>
        <Container maxWidth="md">

          {loading ? <div style={{textAlign:"center"}}><CircularProgress /></div> : <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left">Website</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {userList.length > 0 && userList.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.website}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}


        </Container>
      </StyledContent>
    </>
  )
};

export default Dashboard;
