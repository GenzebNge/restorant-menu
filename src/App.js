import React, { Component } from 'react';
import Menu from './components/MenuComponent'
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Restorant Con fusion </NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}
export default App;
