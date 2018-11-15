# Naive React

An extremely basic, naive re-implementation of React.js (just as a learning experience for myself)

# Implementation Details

### NaiveReact.js

implements 2 functions

```javascript
NaiveReact.createElement(type[, props, children])
```

`createElement` accepts type, props, and children as arguments.

The type can be any of the following:

1. a string of a valid DOMNode type (e.g. 'div', 'h1', etc)
2. a function that returns a valid React Element
3. a class that implements a render() function that returns a valid React Element
4. plain text

`props` is expected to be a plain object with key-value pairs listing out props for the React element (e.g. `{style: "color: red"}`), whereas children is expected to be an array of valid NaiveReact elements.

The return value is a plain javascript object, which will eventually be used to build the JS object tree. An example tree may look something like this:

```javascript
// example JS object tree
const App = NaiveReact.createElement('div', null, [
  'child1',
  NaiveReact.createElement('h1', { style: 'color:red;' }, ['Heading']),
  props => NaiveReact.createElement('h3', null, [`${props.title}`])
]);
```

```javascript
class Component {
  // ...
}
```

`Component` handles for both constructing + managing state of itself. It does not provide a render() by default. Any instances of this Component utilizes an `updateComponent` function provided by the rendering library utilized. Invoking the `updateComponent` function should re-render the component.

### NaiveReactDom.js

This module translates a provided JS object tree to a DOMNode tree. This is primarily done by 3 functions in the module:

```javascript
NaiveReactDom.render(virtualNode, DOMNode);
```

`render` converts the virtualNode into it's DOMNode representation, and adds it as a child to the provided DOMNode.

```javascript
NaiveReactDom.renderNode(virtualNode);
```

`renderNode` converts a virtualNode to it's equivalent DOMNode representation. This includes converting `props` to attributes and properties on a DOMNode, as well as recursively converting all children to their equivalent DOMNode representations.

```javascript
NaiveReactDom.updateComponent;
```

This function is provided via dependency injection to the NaiveReact Class Components. Any instance of a Class component can invoke this `updateComponent` function to force a re-render. It is currently used to handle for changes in setState.

## Completed

- create components
- add props to components
- handle for child components
- support class components
- convert virtual nodes to DOMNodes
- render DOMNodes to DOM
- support for setState for class components
- re-render whenever setState is called

## ToDo

- re-render on props change for both class and functional components
