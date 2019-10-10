import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link, useRouteMatch } from "react-router-dom";
import { Routes } from "../Routes";
import { FixItBus } from "../components/FixItBus";
import { createStyles, makeStyles } from "@material-ui/core";
import { StateSummary } from "../components/StateSummary";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    fab: {
      margin: theme.spacing(1),
      width: 150,
    },
  })
);

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FixItBus />
      <StateSummary />
      <Link to={Routes.VoucherRequestGForm}>
        <Fab variant="extended" className={classes.fab}>
          Request a seat
        </Fab>
      </Link>
    </div>
  );
};
