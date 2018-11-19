import React, { Component } from 'react';
import RouterIndex from './router'
import MainHeader from './components/mainHeader'
import MainFooter from './components/mainFooter'
import './assets/app.css';
class App extends Component {
  render() {
    return (
      <div className="pageWrap">
        <MainHeader></MainHeader>
        <main className="main">
          <RouterIndex></RouterIndex>
        </main>
        <MainFooter></MainFooter>
      </div>
    );
  }
}

export default App;
