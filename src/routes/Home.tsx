import React from "react";
import { Fab, Grid, DialogTitle, Dialog, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Routes } from "../Routes";
import { FixItBus } from "../components/FixItBus";
import { createStyles, makeStyles } from "@material-ui/core";
import { StateSummary } from "../components/StateSummary";
import { Header } from "../components/Header";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    left: {
      alignItems: "center",
      width: "350px",
    },
    right: {
      width: "700px",
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
    <Grid container className={classes.container}>
      <Header />

      <Grid item className={classes.left}>
        <FixItBus />
        <StateSummary />
        <Link to={Routes.VoucherRequestGForm}>
          <Fab variant="extended" className={classes.fab}>
            Request a seat
          </Fab>
        </Link>
      </Grid>
      <Grid item className={classes.right}>
        <Typography variant="h5">Qualifying for Assistance</Typography>
        <Typography variant="body1">
          M-SNAP vouchers are available to residents of Monongalia County because only county residents can relinquish
          pets to the county shelter. Our mission is to reduce the number of animals being euthanized at our county
          shelter by increasing public awareness and promoting spay/neuter as the only viable solution to pet
          overpopulation.
        </Typography>
        <Typography variant="body1">
          We assist caregivers who honestly do not have the resources to fix their animals. Our assistance is not
          intended for those who have made the decision to purchase a dog or cat or those who have adopted an animal
          from a shelter or rescue group that is regulated by the{" "}
          <a href="/wp-content/uploads/2018/03/WVSNA.pdf" target="_blank" rel="noopener noreferrer">
            WV Spay Neuter Act
          </a>
          .
        </Typography>
        <Typography variant="body1">
          M-SNAP began in January 2008, mailed its first voucher in October 2008, and received its 501(c)(3) status in
          March 2009.
        </Typography>
        <Typography variant="h5">Requesting a Spay/Neuter Voucher</Typography>
        <Typography variant="body1">
          Reserve your seat on the bus! If we have vouchers available for the current period, you can{" "}
          <Link to={Routes.VoucherRequestGForm}>request a seat</Link>. Our volunteer callers will reach out to you as
          quickly as we can. If a volunteer makes three unsuccessful attempts to reach you, your seat will be made
          available and you must submit your request again.
        </Typography>
        <Typography variant="body1">We do not issue vouchers via email or Facebook.</Typography>
        <Typography variant="h5">Feral Colony Managers</Typography>
        <Typography variant="body1">
          If you manage a feral cat colony in Monongalia County and need help paying for the trap-neuter-return (TNR)
          spay/neuter operations, call us at{" "}
          <b>
            <a href="tel://304-985-0123">(304) 985-0123</a>
          </b>{" "}
          and leave a message in mailbox #5. You will be required to register with our TNR Program.
        </Typography>
        <Typography variant="h5">Pregnant Dogs and Cats</Typography>
        <Typography variant="body1">
          If you have a visibly pregnant animal and wish to terminate the pregnancy, call us at{" "}
          <b>
            <a href="tel://304-985-0123">(304) 985-0123</a>
          </b>{" "}
          and leave a message in mailbox #5.
        </Typography>
      </Grid>
    </Grid>
  );
};
