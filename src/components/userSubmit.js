import { Fragment } from "react";
import Modal from "./Modal";
import classes from "./userSubmit.module.css";

const UserSubmit = () => {
  return (
    <Fragment>
      <div className={classes.total}>
        <span>Are you sure you want to submit?</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
        //   onClick={props.handleCartClose}
        >
          Dimiss
        </button>
        <button className={classes.button}>Yes</button>
      </div>
    </Fragment>
  );
};

export default UserSubmit;
