import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, Tooltip } from "@material-ui/core";
import { useStateValue } from "../state/state";
import { Spinner } from "./Spinner";
import { Routes } from "../Routes";
import { Link } from "react-router-dom";

const seatsPerRow = 6;
const isleWidth = 5;
const borderWidth = 2;
const seatCommon = {
  margin: 2,
  width: 30,
  height: 30,
};
const seatContainerWidth = (seatCommon.width + seatCommon.margin * 2) * seatsPerRow + isleWidth;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    occupiedSeat: {
      ...seatCommon,
      backgroundImage: "url('assets/paw_print.png')",
      backgroundSize: 30,
      backgroundRepeat: "no-repeat",
      backgroundPositionY: -3,
    },
    openSeat: {
      ...seatCommon,
      width: seatCommon.width - borderWidth * 2,
      height: seatCommon.height - borderWidth * 2,
      backgroundColor: "#d8dde3",
      borderColor: "#3a4456",
      borderWidth,
      borderRadius: 5,
      borderStyle: "solid",
      "&:hover": {
        opacity: 0.5,
        filter: "alpha(opacity=50)",
      },
    },
    aisleSpacer: {
      width: isleWidth,
    },
    seatContainer: {
      display: "flex",
      flexWrap: "wrap",
      width: seatContainerWidth,
    },
    busWrap: {
      width: "275px",
      margin: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    busHood: {
      display: "block",
      width: "100%",
    },
    busDash: {
      display: "block",
      width: "100%",
    },
    busBody: {
      display: "block",
      padding: "3px",
      borderTop: "none",
      borderLeft: "4px solid #fdb303",
      borderRight: "4px solid #fdb303",
      borderBottom: "4px solid #fdb303",
      backgroundColor: "#eaeaea",
    },
    mirror: {
      marginTop: "90px",
    },
    flip: {
      transform: "scaleX(-1)",
    },
    spinnerContainer: {
      display: "flex",
      justifyContent: "center",
      width: seatContainerWidth,
    },
  })
);

interface Props {
  occupied: boolean;
}
const BusSeat: React.FC<Props> = ({ occupied }) => {
  const classes = useStyles();
  if (occupied) {
    return <div className={classes.occupiedSeat} />;
  }

  return (
    <Tooltip title="Get on the bus">
      <Link to={Routes.VoucherRequestGForm}>
        <div className={classes.openSeat} />
      </Link>
    </Tooltip>
  );
};

const CenterAisleSpacer: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.aisleSpacer} />;
};

const BusSeats: React.FC = () => {
  const classes = useStyles();
  const { initialized, bus } = useStateValue()[0];

  if (!initialized) {
    return (
      <div className={classes.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  const seats = [];
  for (let i = 0; i < bus.capacity; i++) {
    seats.push(<BusSeat key={`seat${i}`} occupied={i < bus.seatsTaken} />);
    if (i % seatsPerRow === Math.floor(seatsPerRow / 2) - 1) {
      seats.push(<CenterAisleSpacer key={`aisle${i}`} />);
    }
  }
  return <div className={classes.seatContainer}>{seats}</div>;
};

export const FixItBus: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.busWrap}>
      <div className={classes.mirror}>
        <img alt="bus left mirror" src="assets/bus.mirror.svg" />
      </div>
      <div>
        <img alt="bus hood" src="assets/bus.front.svg" className={classes.busHood} />
        <div className={classes.busBody}>
          <img alt="bus dash" src="assets/bus.dash.svg" className={classes.busDash} />
          <BusSeats />
        </div>
      </div>
      <div className={classes.mirror}>
        <img alt="bus right mirror" src="assets/bus.mirror.svg" className={classes.flip} />
      </div>
    </div>
  );
};
