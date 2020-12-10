import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

// import logo from "../logo.svg";
import { useStyles } from "../custom-theme";

const Header = (props) => {
  const classes = useStyles();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      let scrolled = window.pageYOffset;
      setScrollPos(scrolled >= 50 ? true : false);
    };
  }, []);

  return (
    <AppBar
      // className={trigger ? classes.positionSticky : classes.appbar}
      // color={trigger ? "secondary" : "transparent"}
      classes={{ root: classes.appbarRoot, positionSticky: classes.sticky }}
      position={scrollPos ? "sticky" : "relative"}
    >
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            className={scrollPos ? classes.brandScrolled : classes.brandDefault}
          >
            Notflix
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
