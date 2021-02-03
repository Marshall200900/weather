import React, { Component } from "react";
import './results.css';
import clear from '../../res/clear.png';

class Results extends Component {
  
  
  displayOrNot = (prop) => {
    if(prop === null){
      return 'results hide'
    }
    else {
      return 'results'
    }
  }

 
  render() {
    const {weather, main, name, wind} = this.props.res;
    
    return (
      <div className={this.displayOrNot(this.props.res)}>
        <div className="main-weather-info">
          <img src={clear} alt="no photo :("/>
          <div className="info">
            <div className="temp">{Math.round(main.temp - 273.15)}
            <sup>C<sup>o</sup></sup></div>
            <div className="city">{name}</div>
          </div>
        </div>
        <div className="additional-info">
          <ul>
            <li>Feels like: {Math.round(main.feels_like - 273.15)}</li>
            <li>Humidity: {main.humidity}</li> 
            <li>Pressure: {main.pressure}</li>
            <li>Wind speed: {wind.speed}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Results;
