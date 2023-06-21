import {
  Avatar,
  Box,
  Button,
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

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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
function Notification() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }} className="capitalize">
      <IconButton onClick={handleOpenUserMenu}>
        <Badge badgeContent={1} color="primary">
          <NotificationsNoneIcon className="text-[28px] text-gray-500 " />
        </Badge>
      </IconButton>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        PaperProps={{
          sx: {
            width: "300px",
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
        <div className="mx-4 my-2 flex items-center justify-between text-slate-400">
          <div className="">
            <Typography className="text-md text-slate-900 font-semibold">
              Notifications
            </Typography>
            <Typography className="text-sm text-slate-500">
              {" "}
              You have 2 messages{" "}
            </Typography>
          </div>

<IconButton>
<DoneAllIcon />
</IconButton>
         
        </div>

        <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />
        <MenuItem className="mt-2">
          <div className="flex items-center space-x-2 ">
            <Avatar src="https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=300" />
            <div>
              <Typography className="text-sm font-semibold  " sx={{ whiteSpace: 'normal' }}>
                Your order is placed{" "}
                <span className="text-slate-500 font-medium">
                  waiting for shipping
                </span>
              </Typography>
              <div className="flex items-center space-x-1 text-sm text-slate-500 mt-1">
                <AccessTimeFilledIcon className="w-5 h-5 text-slate-500" />
                <span> 32 minutes ago</span>
              </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem className="mt-2">
          <div className="flex items-center space-x-2 ">
            <Avatar src="https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=300" />
            <div>
              <Typography className="text-sm font-semibold  " sx={{ whiteSpace: 'normal' }}>
                Your order is placed{" "}
                <span className="text-slate-500 font-medium">
                  waiting for shipping
                </span>
              </Typography>
              <div className="flex items-center space-x-1 text-sm text-slate-500 mt-1">
                <AccessTimeFilledIcon className="w-5 h-5 text-slate-500" />
                <span> 32 minutes ago</span>
              </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem className="mt-2">
          <div className="flex items-center space-x-2 ">
            <Avatar src="https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=300" />
            <div>
              <Typography className="text-sm font-semibold  " sx={{ whiteSpace: 'normal' }}>
                Your order is placed{" "}
                <span className="text-slate-500 font-medium">
                  waiting for shipping
                </span>
              </Typography>
              <div className="flex items-center space-x-1 text-sm text-slate-500 mt-1">
                <AccessTimeFilledIcon className="w-5 h-5 text-slate-500" />
                <span> 32 minutes ago</span>
              </div>
            </div>
          </div>
        </MenuItem>

        <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />
        <Button className="w-full capitalize font-semibold">View All</Button>
      </Menu>
    </Box>
  );
}

export default Notification;
