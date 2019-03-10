import React, { Component } from 'react';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Hello extends Component {
  render() {
    return (
      <div className={s.hello}>Hello React Server Side Render!</div>
    )
  }
}

export default withStyles(s)(Hello);