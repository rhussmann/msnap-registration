import React from "react";
import { useStateValue } from "../state/state";
import { Typography } from "@material-ui/core";

export const StateSummary = () => {
  const { initialized, bus } = useStateValue()[0];

  if (initialized === false) {
    return null;
  }

  return <Typography variant="body1">{`${bus.seatsTaken} out of ${bus.capacity} seats taken`}</Typography>;
};
