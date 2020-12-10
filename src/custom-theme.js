import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgba(0, 0, 0, 0)",
    },
    secondary: {
      main: red[500],
    },
    textPrimary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: red[500],
    },
  },
});

export const useStyles = makeStyles({
  appbarRoot: {
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "0px 0px 0px 0px",
    color: theme.palette.secondary.main,
    transition: "ease-out",
  },
  sticky: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    color: "#fff",
    transition: "ease-in",
  },
  brandDefault: {
    color: theme.palette.secondary.main,
  },
  brandScrolled: {
    color: theme.palette.textPrimary.main,
  },
  Grid: {
    padding: "15px",
    alignItems: "center",
  },
  GridItem: {},
  Card: {
    backgroundColor: "transparent",
    border: "1px solid #555",
  },
  CardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  CardHeader: {
    padding: "10px",
  },
  CardHeaderTitle: {
    color: theme.palette.secondary.main,
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    padding: "5px 0 15px",
  },
  gridTile: {
    border: "1px solid #555",
  },
  gridTileBar: {
    // backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    backgroundColor: "#00000030",
  },
  subtitle: {
    textTransform: "capitalize",
  },
});
