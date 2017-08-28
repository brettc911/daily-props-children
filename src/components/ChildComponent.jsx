import React, { Component } from 'react';
import '../styles/App.css';

export default class ChildComponent extends Component {
  render() {
    return (

          <input type="submit" onClick={this.props.onClick}/>
    );
  }
}
