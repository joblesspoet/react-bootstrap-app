import React, { Component } from 'react'
import { CssBaseline } from '@material-ui/core'

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.props.children}
      </React.Fragment>
    )
  }
}
