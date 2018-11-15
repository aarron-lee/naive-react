import NaiveReact from './lib/naiveReact.js';
import NaiveReactDom from './lib/naiveReactDom.js';

const root = document.getElementById('app');

class List extends NaiveReact.Component {
  render() {
    return NaiveReact.createElement('ul', null, [
      NaiveReact.createElement('li', null, ['list element 1']),
      NaiveReact.createElement('li', null, ['list element 2'])
    ]);
  }
}

const CurrentList = NaiveReact.createElement(List);

const Paragraph = props => {
  return NaiveReact.createElement('p', {
    innerHTML: `this is the content of the paragraph: ${props.content}`,
    className: 'paragraph1',
    onClick: () => console.log('paragraph clicked!!')
  });
};

const CurrentParagraph = NaiveReact.createElement(Paragraph, { content: 'content from props!' });

const Heading = NaiveReact.createElement(
  'h1',
  { style: 'color:red', id: 'main-heading', testProp: 'hello world' },
  ['Heading!']
);

const App = NaiveReact.createElement('div', null, [
  Heading,
  'child',
  CurrentParagraph,
  CurrentList
]);

NaiveReactDom.render(App, root);
