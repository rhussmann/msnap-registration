import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { useStateValue } from "../state/state";
import { Spinner } from "./Spinner";

const seatsPerRow = 4;
const seatCommon = {
  margin: 2,
  width: 20,
  height: 20,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    occupiedSeat: {
      ...seatCommon,
      backgroundColor: "red",
    },
    openSeat: {
      ...seatCommon,
      backgroundColor: "blue",
    },
    seatContainer: {
      display: "flex",
      flexWrap: "wrap",
      width: (seatCommon.width + seatCommon.margin * 2) * seatsPerRow,
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

const BusSeats: React.FC = () => {
  const classes = useStyles();
  const { initialized, bus } = useStateValue()[0];

  if (!initialized) {
    return <Spinner />;
  }

  const seats = [];
  for (let i = 0; i < bus.capacity; i++) {
    seats.push(<BusSeat key={`seat${i}`} occupied={i < bus.seatsTaken} />);
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
