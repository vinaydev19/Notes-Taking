import React from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="flex text-white justify-evenly items-center pt-3">
        <h1>Notes Taking</h1>
        <Avatar
          id="basic-button"
          onClick={handleClick}
          className="hover:cursor-pointer"
        >
          VK
        </Avatar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default Header;
