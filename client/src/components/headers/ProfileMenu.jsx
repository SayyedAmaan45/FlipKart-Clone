import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/actions/userActions";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

function ProfileMenu({ account, setAccount }) {
  const [open, setOpen] = useState(null); 
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const logoutUser = () => {
    dispatch(userLogout());
    setAccount('');
    localStorage.removeItem('userData');
    handleClose(); 
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
      </Box>

      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={logoutUser}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
}

export default ProfileMenu;


