import React, { Component } from 'react';
import '../styles/App.css';
import ChildComponent from './ChildComponent.jsx'
import DisplayComponent from './DisplayComponent'


export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      whatToSay: "",
      whatWasSaid: "",
      value: ""
    }
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({whatToSay: this.state.value})
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("fired");
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    this.setState({whatToSay: ""});
    this.setState({value: ""})


  }
  render() {
    return (
      <div>
        <div>
          <form>
            <input onChange={this.handleInput} type="text" value={this.state.value} placeholder="Say It, Don't Spray It!" />
            <ChildComponent onClick={this.handleSubmit}/>
          </form>
        </div>
        <div>
          <p>Your message below:</p><br/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}
