import { IconButton, Box, Typography, Badge } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function MobileHeader() {
  const [value, setValue] = useState("/");
  const router = useRouter()
 





  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="fixed sm:hidden bottom-0 w-full bg-white z_index_header box-box_shadow py-1 ">
      <BottomNavigation  value={router.pathname} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="/"
          onClick={()=>router.push("/")}
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
          value="/cart"
          onClick={()=>router.push("/cart")}
          
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
