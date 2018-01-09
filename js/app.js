import morph from 'nanomorph';
import todosFactory from './todos.store.js';
import renderApp from './app.html.js';

const { localStorage } = window;
const LS_KEY = 'todos-vanillajs';

export default function (root) {
	const savedState = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
	const todos = todosFactory(savedState);
	const node = renderApp(todos);
	root.appendChild(node);

	const render = () => {
		const newNode = renderApp(todos);
		morph(node, newNode);
	};

	todos.on('updated', () => {
		localStorage.setItem(LS_KEY, JSON.stringify(todos));
		render();
	});

	window.addEventListener("hashchange", render, false);
}
