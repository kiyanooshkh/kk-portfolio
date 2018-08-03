import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Navigation from './components/nav';
import Avater from './components/avatar';

class App extends Component {
  render() {
    const theme = createMuiTheme(
      {
        palette: {
          primary: blue,
          secondary: blue,
        },
      }
    );

    return (
      <div>
       <MuiThemeProvider theme={theme}>
       <Navigation/>
       <Avater/>
      </MuiThemeProvider>     
      </div>
    );
  }
}

export default App;
