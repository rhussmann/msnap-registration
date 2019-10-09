import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    },
    iframe: {
      width: "100%",
      height: "100%",
      paddingTop: "20px",
      flex: 1,
    },
  })
);

export const VoucherRequestGForm: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <iframe
        title="Voucher request from"
        frameBorder={0}
        src="https://docs.google.com/forms/d/e/1FAIpQLSc72YM2okznNBg0c6VYawwO6tHdSkWpaQv_4N4NWNNCbo99Ig/viewform?embedded=true"
        className={classes.iframe}
      >
        Loading…
      </iframe>
    </div>
  );
};
