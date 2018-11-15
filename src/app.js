import NaiveReact from './lib/naiveReact.js';
import NaiveReactDom from './lib/naiveReactDom.js';

const root = document.getElementById('app');

const Paragraph = props => {
  return NaiveReact.createElement(
    'p',
    {
      innerHTML: `this is the content of the paragraph: ${props.content}`
    },
    []
  );
};

const CurrentParagraph = NaiveReact.createElement(Paragraph, { content: 'content from props!' });

const Heading = NaiveReact.createElement(
  'h1',
  { style: 'color:red', id: 'main-heading', testProp: 'hello world' },
  ['Heading!']
);

const App = NaiveReact.createElement('div', null, [Heading, 'child', CurrentParagraph]);

NaiveReactDom.render(App, root);
