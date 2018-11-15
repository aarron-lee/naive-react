function handleChildren(children, newElement) {
  children.forEach(child => {
    if (typeof child === 'string') {
      newElement.appendChild(document.createTextNode(child));
    } else {
      newElement.appendChild(renderNode(child));
    }
  });
}

export function renderNode(vNode) {
  const { type, props, children } = vNode;

  if (typeof type === 'string') {
    // type should be something like h1, div, etc
    const newElement = document.createElement(type);

    handleChildren(children, newElement);

    return newElement;
  }
}

export function render(vNode, domNode) {
  domNode.appendChild(renderNode(vNode));
}

export default { render };
