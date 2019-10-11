import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    marginBottom: "15px",
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant="h2">Fix it Bus</Typography>
    </div>
  );
};
