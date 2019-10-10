import React from "react";
import { CircularProgress, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  })
);

export const Spinner: React.FC = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} />;
};
