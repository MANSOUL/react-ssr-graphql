import React from 'react';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {

  render() {
    return (
      <div>
        <p>This is Edit Page!</p>
      </div>
    );
  }
}

export default withStyles(s)(Home);