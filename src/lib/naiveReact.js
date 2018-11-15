export function createElement(type, props, children) {
  return {
    type,
    props,
    children
  };
}

export class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }
  setState(stateChanges) {
    this.priorState = this.state;
    this.state = Object.assign({}, this.state, stateChanges);
    this.updateComponent(this);
  }
}

export default { Component, createElement };
