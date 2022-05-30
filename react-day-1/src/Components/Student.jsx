import React, { Component } from "react";
import "../style.css";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasChanged: false,
    };
  }
  increment = (e) => {
    this.setState({ hasChanged: true });
    this.props.increment(this.props.name);
    this.setFalse()
  };
  setFalse = () => {
    setTimeout(() => {
        this.setState({ hasChanged: false })
    }, 250);
  }
  render() {
    return (
      <div className="flex flex-col h-64 items-center justify-between">
        <div className="w-64 h-48 rounded-xl box-border p-5 bg-white font-bold text-2xl flex flex-col">
          <h1 className="text-4xl">{this.props.name}</h1>
          <h2>{this.props.marks}</h2>
        </div>
        <button className="bg-blue-300 box-border px-3 py-1 rounded-xl font-bold text-2xl text-white" onClick={this.increment}>{this.state.hasChanged ? 'Updated' : 'Add'}</button>
      </div>
    );
  }
}
