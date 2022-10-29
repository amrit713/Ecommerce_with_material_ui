import { IconButton, Box, Typography, Badge } from "@mui/material";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function MobileHeader() {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="fixed sm:hidden bottom-0 w-full bg-white z-30 box-box_shadow py-1 ">
      <BottomNavigation  value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Notification"
          value="notification"
          icon={ <Badge badgeContent={1} color="primary">
          <NotificationsNoneIcon />
        </Badge>}
        />
        <BottomNavigationAction
          label="Cart"
          value="cart"
          
          icon={ <Badge badgeContent={0} color="primary">
             <ShoppingCartOutlinedIcon />
          </Badge>
         }
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<PersonOutlinedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default MobileHeader;
