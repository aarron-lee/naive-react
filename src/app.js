import NaiveReact from './lib/naiveReact.js';
import NaiveReactDom from './lib/naiveReactDom.js';

const root = document.getElementById('app');

class List extends NaiveReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPresses: 0
    };
  }
  render() {
    return NaiveReact.createElement('ul', null, [
      NaiveReact.createElement('li', null, ['list element 1']),
      NaiveReact.createElement('li', null, ['list element 2']),
      NaiveReact.createElement('h5', null, [`${this.state.numOfPresses}`]),
      NaiveReact.createElement(
        'button',
        {
          onClick: () => {
            this.setState({ numOfPresses: this.state.numOfPresses + 1 });
          }
        },
        ['Button content']
      )
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
