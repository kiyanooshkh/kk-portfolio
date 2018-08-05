import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Navigation from './components/nav';
import Carousel from './components/carousel';
import * as color from './common/colors';

class App extends Component {
  render() {
    const theme = createMuiTheme(
      {
        palette: {
          primary: {
            main:color.primaryblue
          },
          secondary: blue,
        },
      }
    );

    return (
      <div>
       <MuiThemeProvider theme={theme}>
       <Navigation/>
       <Carousel/>
      </MuiThemeProvider>     
      </div>
    );
  }
}

export default App;
