import React, { Component } from 'react';
import '../styles/App.css';

export default class DisplayComponent extends Component {
  render() {
    return (
      <h1>{this.props.sayWhat}</h1>
    );
  }
}
