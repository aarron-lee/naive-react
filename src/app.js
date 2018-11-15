import NaiveReact from './lib/naiveReact.js';
import NaiveReactDom from './lib/naiveReactDom.js';

const root = document.getElementById('app');

const Heading = NaiveReact.createElement('h1', null, 'Heading!');

const App = NaiveReact.createElement('div', null, Heading, 'child');

NaiveReactDom.render(App, root);
