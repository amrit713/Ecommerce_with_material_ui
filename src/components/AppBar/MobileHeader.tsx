import { IconButton, Box, Typography, Badge } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useTypedSelector } from "../../../store/store";
import Link from "next/link";

function MobileHeader() {
  const [value, setValue] = useState("/");
  const router = useRouter();
  const { cartItems } = useTypedSelector((state) => state.cart);
  const {userInfo} = useTypedSelector(state=>state.auth)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="fixed sm:hidden bottom-0 w-full bg-white z_index_header box-box_shadow py-1 ">
      <BottomNavigation value={router.pathname} onChange={handleChange}>
        <Link href="/">
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<HomeOutlinedIcon />}
          />
        </Link>
        <BottomNavigationAction
          label="Notification"
          value="notification"
          icon={
            <Badge badgeContent={1} color="primary">
              <NotificationsNoneIcon />
            </Badge>
          }
        />

        <Link href="/cart">
          <BottomNavigationAction
            label="Cart"
            value="/cart"
            icon={
              <Badge badgeContent={cartItems?.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            }
          />
        </Link>
        <Link href={userInfo?"/profile":"/login"}>
          <BottomNavigationAction
            label="Account"
            value="account"
            icon={<PersonOutlinedIcon />}
          />
        </Link>
      </BottomNavigation>
    </Box>
  );
}

export default MobileHeader;
