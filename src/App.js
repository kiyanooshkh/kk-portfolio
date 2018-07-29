import React, { Component } from 'react';
import Navigation from './components/nav'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
  render() {
    const theme = createMuiTheme();
    return (
      <div>
       <MuiThemeProvider theme={theme}>
       <Navigation/>
      </MuiThemeProvider>     
      </div>
    );
  }
}

export default App;
