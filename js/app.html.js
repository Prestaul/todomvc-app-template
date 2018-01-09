import html from 'bel';
import renderHeader from './header.html.js';
import renderFooter from './footer.html.js';
import renderTodos from './todos.html.js';

const renderApp = todos => html`
	<section class="todoapp">
		${renderHeader(todos)}
		${renderTodos(todos)}
		${todos.todoCount > 0 ? renderFooter(todos) : null}
	</section>
`;

export default renderApp;
