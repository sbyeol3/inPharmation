import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';

class Main extends Component {
  constructor(props){
    super(props);
    this.state= {
      addr : "",
      days : [],
    }
  }

  render(){
    return(
      <div>
        <Search/>
        <Display/>
      </div>
    );
  }
}

export default Main