import React, { Component } from "react";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import Welcome from "./components/Welcome/";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import { connect } from 'react-redux';
import Layout from "./components/Layout";
import HomeNavBar from "./components/HomeNavBar";
import { withStyles } from '@material-ui/core/styles';
import Footer from "./components/Footer";
import Progress from "./components/Progress";

const useStyles = theme => ({
  
});

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
  }

  isLoading = () => {
    const {isLoading} = this.props;

    return isLoading ?
    <Progress />
    : null;
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  componentDidMount() {}

  render() {
    // const { classes } = this.props;
    return (
      <Layout>
        <HashRouter hashType="slash">
          {this.isLoading()}
          <HomeNavBar />
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <PrivateRoute
                exact
                path="/admin/welcome"
                auth={true}
                component={Dashboard}
              />
            </Switch>
            <Footer />
          </React.Fragment>
        </HashRouter>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    home: state.home
  };
};
export default connect(mapStateToProps,{})(withStyles(useStyles)(Routes));
