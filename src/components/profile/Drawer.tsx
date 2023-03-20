import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import DehazeIcon from "@mui/icons-material/Dehaze";
import { IconButton, Typography, Icon } from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const dashboardItems= [{
    name:"Order",
    icon:<ShoppingBagOutlinedIcon/>
},
{   
    name:"Wishlist",
    icon:<FavoriteBorderOutlinedIcon />
},
{   name:"Support",
    icon:<SupportAgentOutlinedIcon />
}

];

const settingItems = [{
    name:"Proflie Info",
    icon:<PersonOutlineOutlinedIcon />
},
{   
    name:"Address",
    icon:<LocationOnOutlinedIcon />
},
{   name:"Payment Methods",
    icon:<CreditCardOutlinedIcon />
}

];

type Anchor = "left";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="subtitle1"
        className="p-4  text-gray-400  text-sm font-medium uppercase "
      >
        Dashboard
      </Typography>
      <Divider />
      <List>
        {dashboardItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
        variant="subtitle1"
        className="p-4  text-gray-400  text-sm font-medium uppercase "
      >
        Account Setting
      </Typography>
      <Divider />
      <List>
        {settingItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          {" "}
          <DehazeIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
