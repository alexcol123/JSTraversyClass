//4752533-d790af2003bcaa99567db095b


import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';


import './App.css';

class App extends Component {
  render() {
    return  (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default App;
