import React from 'react';
import PropTypes from 'prop-types';

class StyleProvider extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }

  static childContextTypes = {
    insertCss: PropTypes.func
  }

  getChildContext() {
    return {
      insertCss: this.props.cssContext.insertCss
    }
  }

  render() {
    return (this.props.children);
  }
}

export default StyleProvider;