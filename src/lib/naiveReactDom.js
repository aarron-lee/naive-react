function handleChildren(children, newElement) {
  children.forEach(child => {
    if (typeof child === 'string') {
      newElement.appendChild(document.createTextNode(child));
    } else {
      newElement.appendChild(renderNode(child));
    }
  });
}

function handleProps(props, newElement) {
  if (!props) return;
  const propNames = Object.keys(props);

  propNames.forEach(propName => {
    if (propName in newElement) {
      // DomNode has property, set it
      newElement[propName] = props[propName];
    } else {
      newElement.setAttribute(propName, props[propName]);
    }
  });
}

export function renderNode(vNode) {
  const { type, props, children } = vNode;

  if (typeof type === 'function') {
    // functional component, recursively render
    return renderNode(type(props));
  }

  if (typeof type === 'string') {
    // type should be something like h1, div, etc
    const newElement = document.createElement(type);

    handleChildren(children, newElement);
    handleProps(props, newElement);

    return newElement;
  }
}

export function render(vNode, domNode) {
  domNode.appendChild(renderNode(vNode));
}

export default { render };
