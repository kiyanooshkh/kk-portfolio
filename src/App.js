import React, { Component } from 'react';
import Navigation from './components/nav'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

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
      </MuiThemeProvider>     
      </div>
    );
  }
}

export default App;
