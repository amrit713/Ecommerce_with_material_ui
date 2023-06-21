import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logout } from "../../../store/action/authAction";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",

      content: '""',
    },
  },
}));

function ProfileHeader() {
  const router = useRouter();
  const dispatch = useTypedDispatch();
  const { userInfo }: any = useTypedSelector((state) => state.auth);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }} className="capitalize">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar className="relative bg-primary-main">
            {userInfo.profilePic ? (
              <Image
                alt="profileImage"
                src={`http://localhost:4000/public/img/users/${userInfo.profilePic}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 duration-300 "
              />
            ) : (
              <PersonOutlinedIcon />
            )}
          </Avatar>
        </StyledBadge>
      </IconButton>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        PaperProps={{
          sx: {
            width: "200px",
            borderRadius: "6px",
            boxShadow: " 4px -3px 23px 5px rgba(0,0,0,0.1)",
          },
        }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <div className="py-2">
          <Typography className=" font-semibold capitalize px-3">
            {" "}
            {userInfo?.firstName} {userInfo.lastName}
          </Typography>
          <Typography className="text-sm text-gray-400 capitalize px-3">
            {" "}
            {userInfo?.role}
          </Typography>
        </div>

        <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />

        {userInfo.role === "admin" && (
          <Link href="/admin/products">
            <MenuItem onClick={handleCloseUserMenu} className="mt-2">
              <Typography
                textAlign="center"
                className="text-base  text-slate-600"
              >
                Admin
              </Typography>
            </MenuItem>
          </Link>
        )}
        <Link href="/profile">
          <MenuItem onClick={handleCloseUserMenu} className="mt-2">
            <Typography
              textAlign="center"
              className="text-base  text-slate-600"
            >
              Profile
            </Typography>
          </MenuItem>
        </Link>

        <Link href="/orders">
        <MenuItem onClick={handleCloseUserMenu}>
          
            <Typography
              textAlign="center"
              className="text-base  text-slate-600"
            >
              My Orders
            </Typography>
          
        </MenuItem>
        </Link>
        <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography
            textAlign="center"
            onClick={logoutHandler}
            className="text-base text-slate-600"
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileHeader;
