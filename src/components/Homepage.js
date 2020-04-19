import React, { Component } from 'react';
import Logo from "./homepagewallpaper.png";
import "./homepagecss.css"

class App extends Component {
  


  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="imgbox">
              <img className="center-fit" src={Logo} alt="website logo" />
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
