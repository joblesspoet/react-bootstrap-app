import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  BrowserRouter,
  withRouter,
  Link
} from "react-router-dom";

const styles = theme => ({
  appBar: {
    position: "static",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  toobarButton: {
    color: "#fff"
  }
});

const HomeNavBar = props => {
  const { classes } = props;
  const { pathname } = props.history.location;
  return (
    <React.Fragment>
      <AppBar color="primary" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography
            onClick={() => props.history.replace("/")}
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
           Hello World.
          </Typography>
         {pathname === "/signup" ? (
            <Button disabled className={classes.toobarButton}>
              Signup
            </Button>
          ) : (
            <Link to="/signup">
              <Button className={classes.toobarButton}>Signup</Button>
            </Link>
          )}

          {pathname === "/login" ? (
            <Button disabled className={classes.toobarButton}>
              Login
            </Button>
          ) : (
            <Link to="/login">
              <Button className={classes.toobarButton}>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

HomeNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(withRouter(HomeNavBar));
