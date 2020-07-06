import React, {useEffect, useState} from 'react';
import {TextField, Button, createMuiTheme, ThemeProvider, Typography, CircularProgress, Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import {Redirect} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import {yellow} from "@material-ui/core/colors";
const Custom = styled(TextField)({
    borderRadius: "4px",
    backgroundColor: "rgb(255,255,255)",
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#505050",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const style = {
    Box:{
        background: "rgb(225,225,225)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    Box2:{
        background: "rgb(255,255,255)",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 2rem 0.5rem 2rem"
    },
    Box3:{
        background: "rgb(240,240,240)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding:"1em 0em 1em 0em",
        color: "rgb(165,165,165)"
    },
    Element: {
        zIndex: "1000",
        width: "100%",
        marginBottom: "15px",
        backgroundColor: "white"
    },
    Element2: {
        zIndex: "1000",
        width: "100%",
        marginBottom: "15px",
        backgroundColor: "#43d1b0",
        color: "white",
        fontFamily: "Open Sans"
    },
    Brand:{
        position: "relative",
        top: "23%",
        zIndex: "1000",
        textAlign: "center",
        color: "rgb(153,153,153)",
        font: '"Segoe UI"'
    },
    CardStyle:{
        // margin: "2rem 1rem 2rem 1rem"
        padding: "0px"
    }
}

const Login = (props) => {
    console.log(props);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);
    const [dialogState, setDialogState] = useState(false);

    const tryLog = () =>{
        setLoading(true);
        setTimeout(() => {
            if (user === "admin" && pass === "admin") {
                props.LogIn();
            }
            else {
                setDialogState(false);
                setLoading(false);
                setDialogState(true);
            }
        }, 1000);
    }
    const handleKey = (e) => {
        if (e.keyCode === 13){
            tryLog();
        }
    }
    useEffect(() =>{
        document.addEventListener("keyup", handleKey);
        return(() =>{
            document.removeEventListener("keyup", handleKey);
        });
    });
    if (props.logged){
        return(
            <Redirect to = '/home'/>
        )
    }
    return(
        <>
            <ThemeProvider theme={theme}>
                <Box style = {style.Box} maxWidth = "xs">
                    <Card variant="outlined">
                        <CardContent style={style.CardStyle}>
                            <Typography style = {style.Brand} variant = "h2">LOG IN</Typography>
                            <Box style = {style.Box2}>
                                <Custom onChange = {event => setUser(event.target.value)} value = {user} style ={style.Element} id="outlined-basic" label="E-Mail" variant="outlined" color="red"/>
                                <Custom type = {"password"} onChange = {event => setPass(event.target.value)} value = {pass} style ={style.Element} id="outlined-basic" label="Password" variant="outlined" />
                                {loading ?
                                    <CircularProgress style ={{zIndex: "100", marginTop: "10px"}}/> :
                                    <Button onClick={tryLog} style={style.Element2} variant="contained">
                                        Log In
                                    </Button>}
                            </Box>
                            <Box>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    style={style.Box3}
                                >
                                    Forgot Password
                                </Link>
                            </Box>

                        </CardContent>
                    </Card>
                </Box>
                <Snackbar anchorOrigin={{vertical: "top", horizontal:"center"}} open={dialogState} autoHideDuration={4000} onClose={() => setDialogState(false)}>
                    <Alert onClose={() => setDialogState(false)} severity="error">
                        Incorrect E-Mail or Password
                    </Alert>
                </Snackbar>
            </ThemeProvider>
        </>
    )
}

export default Login;