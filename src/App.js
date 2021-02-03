import './App.css';
import './bootstrap.min.css';
import Search from './components/search';
import Results from './components/results';
import WeatherService from './services/weather-service';
import React, { Component } from "react";

class App extends Component {
  weatherService = new WeatherService();
  state = {
     results: null,
  };
 
  render() {
    return (
      <div className="App">
        <h1>Find da weather</h1>
        <Search searchCity={this.searchCity}/>
        {this.state.results === null ? null : <Results res={this.state.results}/>}

      </div>
    );
  }

  searchCity = (val) => {
    this.weatherService.GetCity(val)
      .then((city)=> {
        this.setState({results: city});
      })
      .catch(()=> console.log("could not fetch"));
  }

}

export default App;
