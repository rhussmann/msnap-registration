import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles({
  dash: {
    display: "block",
    width: "100%",
  },
});

interface Props {
  open: boolean;
  onClose: Function;
}

const DriverModal: React.FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
      <DialogTitle id="simple-dialog-title">Why a bus?</DialogTitle>
      <div>
        Etiam tempor orci eu lobortis elementum nibh tellus molestie. Neque egestas congue quisque egestas. Egestas
        integer eget aliquet nibh praesent tristique. Vulputate mi sit amet mauris. Sodales neque sodales ut etiam sit.
        Dignissim suspendisse in est ante in. Volutpat commodo sed egestas egestas. Felis donec et odio pellentesque
        diam. Pharetra vel turpis nunc eget lorem dolor sed viverra. Porta nibh venenatis cras sed felis eget. Aliquam
        ultrices sagittis orci a. Dignissim diam quis enim lobortis. Aliquet porttitor lacus luctus accumsan. Dignissim
        convallis aenean et tortor at risus viverra adipiscing at.
      </div>
    </Dialog>
  );
};

export const BusDash = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img alt="bus dash" className={classes.dash} src="assets/bus.dash.svg" onClick={handleClickOpen} />
      <DriverModal open={open} onClose={handleClose} />
    </div>
  );
};
