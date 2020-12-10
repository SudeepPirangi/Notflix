import React from "react";
import { Typography } from "@material-ui/core";

const NotAllowed = (props) => {
  return (
    <Typography component="h1" variant="h4" color="secondary">
      Access Denied
    </Typography>
  );
};

export default NotAllowed;
