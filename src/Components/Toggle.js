import React, { Component } from 'react';
import Switch from './Switch';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    }
  }

  toggle = () => {
    const {on} = this.state;
    this.setState({
      on: !on
    })
  }

  render() {
    const { on } = this.state;
    return(
      <Switch on={on} toggle={this.toggle} />
    )
  }

}

export default Toggle;
