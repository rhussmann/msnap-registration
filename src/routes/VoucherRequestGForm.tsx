import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

export const VoucherRequestGForm: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc72YM2okznNBg0c6VYawwO6tHdSkWpaQv_4N4NWNNCbo99Ig/viewform?embedded=true"
        width="640"
        height="2066"
      >
        Loading…
      </iframe>
    </div>
  );
};
