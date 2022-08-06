import React from "react";
import { IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Styles.css"

const AvatarImage = () => {
  return (
    <IconButton size="small" edge="start">
      <PersonOutlineIcon
        className="Icon-CardWidget"
        style={{
          color: "#000",
          backgroundColor: "#FFEDDB",
          width: 35,
          height: 35,
          borderRadius: 10,
          marginLeft: 8,
        }}
      />
    </IconButton>
  );
};

export default AvatarImage;