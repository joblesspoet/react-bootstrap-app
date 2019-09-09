import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProgressBar extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>  
        <div className={classes.wrapper}>
          <CircularProgress size={68}  />
          <p className={classes.wait_text}>Please wait</p>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles_custom = theme => ({
  
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 10000,
    opecity: 0.1
  },
  wrapper: {
  },
  wait_text:{
    fontWeight:'bold',
  } 
});

export default withStyles(styles_custom)(ProgressBar);