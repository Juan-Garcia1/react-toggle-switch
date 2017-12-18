import React, {Component} from 'react';

class Switch extends Component {
  toggle = () => {
    this.props.toggle()
  }
  render() {
    const { on } = this.props;
    const switchToggle = on ? 'toggle' : '';
    const active = on ? 'active' : '';
    return (
      <div onClick={this.toggle} id="toggleSwitch" className={active} >
        <div id="toggleCircle" className={switchToggle}></div>
      </div>
    )
  }
}

export default Switch;
