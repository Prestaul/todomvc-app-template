import { apply } from 'apply-html';
import todosFactory from './todos.store.js';
import renderApp from './app.html.js';

import TodosAddElement from './todos-add.element.js';

const { localStorage } = window;
const LS_KEY = 'todos-vanillajs';

export default function (root) {
	customElements.define('todos-add', TodosAddElement);

	const savedState = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
	const todos = todosFactory(savedState);
	const node = renderApp(todos);

	apply(root, node);

	const render = () => {
		apply(root, renderApp(todos));
	};

	todos.on('updated', () => {
		localStorage.setItem(LS_KEY, JSON.stringify(todos));
		render();
	});

	window.addEventListener('hashchange', render, false);
}
