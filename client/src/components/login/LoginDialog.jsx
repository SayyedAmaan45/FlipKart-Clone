import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { userLogin, userSignUp } from "../../store/actions/userActions"
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
height:70vh;
width:90vh;
`;

const Img = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85%  no-repeat;
height:81.5%;
width:28%;
padding:45px 35px;
& > p, & > h5{
color:#FFFFFF;
font-weight:600;
}
`;

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& >div, & > button, & > p {
margin-top:20px;
}
`;

const LoginButton = styled(Button)`
text-transform:none;
background-color: #FB641B;
color:#fff;
height:48px;
border-radius: 2px ;
`;

const RequestOTP = styled(Button)`
text-transform:none;
background-color: #fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`;

const CreateAccount = styled(Typography)`  
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
 `;

const ErrorMsg = styled(Typography)`
 font-size:12px;
 color:#ff6161;
 line-height:0;
 margin-top:10px;
 font-weight:600;
 `



function LoginDialog({ open, setOpen }) {
    
    const accountInitialValues = {
        login: {
            view: 'login',
            heading: "Login",
            subHeading: "Get accesss to your Orders, Wishlist and Recommendations",


        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here!",
            subHeading: "Sign up with your Mobile number to get started.",
        }

    }
    const signUpInitialVal = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        phoneNo: ""
    };

    const loginInitialVal = {
        userName: "",
        password: "",
    };

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignUp] = useState(signUpInitialVal);
    const [login, setLogin] = useState(loginInitialVal);
    const [error, setError] = useState(false);
    const { setAccount } = useContext(DataContext);
    const dispatch = useDispatch();
    const { userData, error: reduxError } = useSelector((state) => state.user);

    function handleChange(e) {
        e.preventDefault();
        setSignUp({ ...signup, [e.target.name]: e.target.value });
    }

    function handleClose() {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    function handleToggleSignUp() {
        toggleAccount(accountInitialValues.signup);
    }


    async function handleSignUpUser() {
        try {
            await dispatch(userSignUp(signup)); 
        } catch (error) {
            console.error('Error during signup:', error);
            setError(true);
        }
    }


    function onValueChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    async function loginUser() {
        try {
            await dispatch(userLogin(login)); 
        } catch (error) {
            console.error('Error during login:', error);
            setError(true);
        }
    }
    
    useEffect(() => {
        if (userData && !reduxError) {
            handleClose();
            setAccount(userData.firstName); 
        }
    }, [userData, reduxError]); 

    return (
        <>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
                <Component>
                    <Box style={{ display: 'flex', height: '100%' }}>
                        <Img>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>

                        </Img>
                        {
                            account.view === 'login' ?
                                <Wrapper>
                                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name="userName" label="Enter Username" />
                                    {
                                        error && <ErrorMsg>Please Enter Valid Username Or Password</ErrorMsg>
                                    }
                                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                                    <Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </Text>
                                    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                                    <Typography style={{ textAlign: "center" }}>OR</Typography>
                                    <RequestOTP>Request OTP</RequestOTP>
                                    <CreateAccount onClick={handleToggleSignUp}>New to Flipkart? Create an Account</CreateAccount>
                                </Wrapper >
                                :
                                <Wrapper>
                                    <TextField variant="standard" onChange={handleChange} name="firstName" label="Enter First Name" />
                                    <TextField variant="standard" onChange={handleChange} name="lastName" label="Enter Last Name" />
                                    <TextField variant="standard" onChange={handleChange} name="userName" label="Enter UserName" />
                                    <TextField variant="standard" onChange={handleChange} name="email" label="Enter Email" />
                                    <TextField variant="standard" onChange={handleChange} name="password" label="Enter Password" />
                                    <TextField variant="standard" onChange={handleChange} name="phoneNo" label="Enter Phone" />
                                    <LoginButton onClick={handleSignUpUser}>Continue</LoginButton>
                                </Wrapper >
                        }
                    </Box>
                </Component>
            </Dialog>

        </>
    )
}

export default LoginDialog; 


