"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className=" bottom-0">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between items-center">
          <div>© 2024 Stockboards, Inc. All rights reserved.</div>
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            className="bg-inherit"
          >
            <BottomNavigationAction icon={<GitHubIcon />} />
            <BottomNavigationAction icon={<LinkedInIcon />} />
            <BottomNavigationAction icon={<InstagramIcon />} />
            <BottomNavigationAction icon={<XIcon />} />
          </BottomNavigation>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
