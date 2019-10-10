import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { useStateValue } from "../state/state";
import { Spinner } from "./Spinner";
import { url } from "inspector";

const seatsPerRow = 6;
const isleWidth = 5;
const seatCommon = {
  margin: 2,
  width: 30,
  height: 30,
};

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
      backgroundColor: "blue",
    },
    aisleSpacer: {
      width: isleWidth,
    },
    seatContainer: {
      display: "flex",
      flexWrap: "wrap",
      width: (seatCommon.width + seatCommon.margin * 2) * seatsPerRow + isleWidth,
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
    },
    mirror: {
      marginTop: "90px",
    },
    flip: {
      transform: "scaleX(-1)",
    },
  })
);

interface Props {
  occupied: boolean;
}
const BusSeat: React.FC<Props> = ({ occupied }) => {
  const classes = useStyles();
  return <div className={occupied ? classes.occupiedSeat : classes.openSeat} />;
};

const CenterAisleSpacer: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.aisleSpacer} />;
};

const BusSeats: React.FC = () => {
  const classes = useStyles();
  const { initialized, bus } = useStateValue()[0];

  if (!initialized) {
    return <Spinner />;
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
