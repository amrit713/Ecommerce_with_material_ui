import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  Typography,
  Icon,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { useRouter } from "next/router";

const dashboardItems = [
  {
    name: "Order",
    icon: <ShoppingBagOutlinedIcon />,
    path: "/orders",
  },
  {
    name: "Wishlist",
    icon: <FavoriteBorderOutlinedIcon />,
    path: "/wishlist",
  },
  { name: "Support", icon: <SupportAgentOutlinedIcon />, path: "/404" },
];

const settingItems = [
  {
    name: "Proflie Info",
    icon: <PersonOutlineOutlinedIcon />,
    path: "/profile",
  },
  {
    name: "Address",
    icon: <LocationOnOutlinedIcon />,
    path: "/address",
  },
  {
    name: "Payment Methods",
    icon: <CreditCardOutlinedIcon />,
    path: "/paymentMethod",
  },
];
function Dashboard() {
  const router = useRouter();

  return (
    <div className="bg-white w-[90%] mt-[4.4rem] rounded-md p-4">
      <Typography
        variant="subtitle1"
        className="p-4  text-gray-400  text-sm font-medium capitalized "
      >
        Dashboard
      </Typography>
      <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />

      <List>
        {dashboardItems.map((item) => (
          <ListItem
            key={item.name}
            className={`text-slate-600 duration-500 hover:scale-105 ease-in-out rounded ${
              item.path === router.pathname ? "scale-105 bg-[#f5f5f5]" : ""
            }`}
            onClick={() => router.push(item.path)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Typography
        variant="subtitle1"
        className="p-4  text-gray-400  text-sm font-medium capitalized "
      >
        Account Setting
      </Typography>
      <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />
      <List>
        {settingItems.map((item) => (
          <ListItem
            key={item.name}
            className={`text-slate-600 duration-500 hover:scale-105 ease-in-out rounded ${
              item.path === router.pathname ? "scale-105 bg-[#f5f5f5]" : ""
            }`}
            onClick={() => router.push(item.path)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Dashboard;
