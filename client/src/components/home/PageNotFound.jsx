import { AppBar, Box, Button, Typography, styled, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#ffffff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px", 
}));

const NotFoundHeader = styled(AppBar)(({ theme }) => ({
    background: "#2874f0",
    height: "78px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const BoxHeader = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: "center",
}));

const Btn = styled(Button)(({ theme }) => ({
    backgroundColor: "#2874f0",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .2)",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: theme.spacing(3),
    borderRadius: "2px",
    textDecoration: "none",
    "&:hover": {
        backgroundColor: "#0056b3",
    },
}));

function PageNotFound() {
    const logoURL = "http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png";
    const notFoundLogoURL = "https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png";
    const navigate = useNavigate();

    function handleHomePage() {
        navigate("/");
    }

    return (
        <>
            <PageContainer>
                <NotFoundHeader>
                    <img
                        src={logoURL}
                        alt="Logo"
                        style={{ width: "100px", maxWidth: "100%", textAlign: "center" }}
                    />
                </NotFoundHeader>
                <BoxHeader>
                    <img
                        src={notFoundLogoURL}
                        style={{
                            width: "100%",
                            maxWidth: "450px",
                            marginTop: "50px",
                        }}
                        alt="Page Not Found"
                    />
                    <Typography
                        color="#000"
                        fontSize={{ xs: "14px", sm: "18px" }}
                        fontWeight="400"
                        marginTop="16px"
                    >
                        Unfortunately, the page you are looking for has been moved or deleted.
                    </Typography>
                    <Btn onClick={handleHomePage}>
                        GO TO HOMEPAGE
                    </Btn>
                </BoxHeader>
            </PageContainer>
        </>
    );
}

export default PageNotFound;
