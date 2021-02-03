import React, { Component } from "react";
import './search.css';



class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',


    };
  }
  render() {
    return (
    <div className="search">
      <input className="input" placeholder="Type here.." 
        type="search" 
        value={this.state.value}
        onChange={this.onValueChange}/>  
      <button className="btn btn-primary" onClick={() => this.props.searchCity(this.state.value)}>Search</button>
    </div>
    )
  }


  onValueChange = (e) => {
    this.setState({value: e.target.value});
  }
}

export default Search;
