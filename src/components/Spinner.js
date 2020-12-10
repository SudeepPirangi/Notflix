import React from "react";

const Spinner = (props) => {
  if (props.visible) {
    // return (
    //   <div style={classes.spinner}>
    //     {/* <i className="mySpinner" style={classes.spinnerIcon}>
    //       &#xf110;
    //     </i> */}
    //     <img src="/spinner.gif" style={classes.spinnerImg} alt="spinner" />
    //   </div>
    // );
    return (
      <div id="spinnerBackdrop">
        <img src="/spinner.gif" style={classes.spinnerImg} alt="spinner" />
        {/* <p style={classes.waitText}>Loading...</p> */}
      </div>
    );
  }
  return null;
};

export default Spinner;

const classes = {
  spinner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerIcon: {
    fontSize: 36,
    color: "#f44336",
  },
  spinnerImg: {
    height: 60,
  },
  waitText: {
    fontWeight: 500,
    fontSize: 18,
    color: "#f44336",
    textTransform: "uppercase",
    marginTop: 10,
  },
};
