import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import StyleProvider from './style-provider'
import routes from './routes';

class App extends Component {
  render() {
    return (
      <StyleProvider {...this.props}>
        <Switch>
          {
            routes.map(({path, exact, component: C, ...rest}) => (
              <Route 
                key={path}
                path={path}
                exact={exact}
                render={(props) => <C {...props} {...rest}/>}
              />
            ))
          }
        </Switch>
      </StyleProvider>
    )
  }
}

export default App;