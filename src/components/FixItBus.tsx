import React from "react";
import { BusSeatChart } from "./BusSeatChart";

export const FixItBus: React.FC = () => {
  const busWrap = {
    width: "275px",
    margin: "20px",
    display: "flex",
    flexDirection: "row",
  } as React.CSSProperties;
  const busHood = {
    display: "block",
    width: "100%",
  };
  const busDash = {
    display: "block",
    width: "100%",
  };
  const busBody = {
    display: "block",
    padding: "3px",
    borderTop: "none",
    borderLeft: "4px solid #fdb303",
    borderRight: "4px solid #fdb303",
    borderBottom: "4px solid #fdb303",
  };
  const mirror = {
    marginTop: "90px",
  };
  const flip = {
    transform: "scaleX(-1)",
  };
  return (
    <div style={busWrap}>
      <div style={mirror}>
        <img alt="bus left mirror" src="assets/bus.mirror.svg" />
      </div>
      <div>
        <img alt="bus hood" src="assets/bus.front.svg" style={busHood} />
        <div style={busBody}>
          <img alt="bus dash" src="assets/bus.dash.svg" style={busDash} />
          <BusSeatChart />
        </div>
      </div>
      <div style={mirror}>
        <img alt="bus right mirror" src="assets/bus.mirror.svg" style={flip} />
      </div>
    </div>
  );
};
