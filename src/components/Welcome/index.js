import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import {
  withRouter
} from "react-router-dom";
import {APP_NAME} from '../../config/config';

const useStyles = theme => ({

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
});

class Welcome extends Component {
  
  componentDidMount() {
    document.title = APP_NAME+" App";
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        {/* Hero unit */}
        <Container maxWidth="xs" component="main" className={classes.heroContent}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             {APP_NAME}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout.
              It&apos;s built with default Material-UI components with little customization.
            </Typography>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(useStyles)(withRouter(Welcome));