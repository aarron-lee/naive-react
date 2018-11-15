import NaiveReact from './lib/naiveReact.js';
import NaiveReactDom from './lib/naiveReactDom.js';

const root = document.getElementById('app');

const App = NaiveReact.createElement('h1', null, 'child1');

NaiveReactDom.render(App, root);
