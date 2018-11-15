export function renderNode(vNode) {
  const { type, props, children } = vNode;

  if (typeof type === 'string') {
    // type should be something like h1, div, etc
    const newElement = document.createElement(type);

    return newElement;
  }
}

export function render(vNode, domNode) {
  domNode.appendChild(renderNode(vNode));
}

export default { render };
