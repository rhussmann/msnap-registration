import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
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

  let path = "/msnap-registration" + Routes.VoucherRequestGForm;
  if (typeof window !== "undefined" && window.location.host.startsWith("localhost")) {
    path = Routes.VoucherRequestGForm;
  }

  return (
    <div className={classes.container}>
      <FixItBus />
      <StateSummary />
      <Link to={path}>
        <Fab variant="extended" className={classes.fab}>
          Request a seat
        </Fab>
      </Link>
    </div>
  );
};
