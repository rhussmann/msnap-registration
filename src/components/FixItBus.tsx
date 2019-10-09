import React from "react";
import { blockStatement } from "@babel/types";
import { NONAME } from "dns";

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
          <img alt="bus dash" src="assets/bus.dash.svg" style={busDash} /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
        </div>
      </div>
      <div style={mirror}>
        <img alt="bus right mirror" src="assets/bus.mirror.svg" style={flip} />
      </div>
    </div>
  );
};
