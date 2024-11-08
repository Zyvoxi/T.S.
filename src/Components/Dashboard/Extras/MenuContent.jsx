import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const mainListItems = [
  { text: "Inicio", icon: <HomeRoundedIcon /> },
  { text: "Analises", icon: <AnalyticsRoundedIcon /> },
  { text: "Tarefas", icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  { text: "Ajuda", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense={true}>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding={true} sx={{ display: "block" }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense={true}>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding={true} sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
