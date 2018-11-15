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
  }
}

export default { Component, createElement };
