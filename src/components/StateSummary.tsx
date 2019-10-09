import React from "react";
import { useStateValue } from "../state/state";
import { CircularProgress, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  })
);

export const StateSummary = () => {
  const classes = useStyles();
  const { initialized, bus } = useStateValue()[0];

  if (initialized === false) {
    return <CircularProgress className={classes.progress} />;
  }

  return <Typography variant="body1">{`${bus.seatsTaken} out of ${bus.capacity} seats taken`}</Typography>;
};
