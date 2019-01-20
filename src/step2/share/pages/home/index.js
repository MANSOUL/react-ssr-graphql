import React from 'react';
import {Link} from 'react-router-dom';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {

  render() {
    return (
      <div>
        <p>This is Home Page!</p>
        <Link to="/create">Go to Create Page</Link>
        <p />
        <Link to="/edit">Go to Edit Page</Link>
      </div>
    );
  }
}

export default withStyles(s)(Home);