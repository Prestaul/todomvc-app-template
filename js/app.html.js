import { html } from 'apply-html';
import renderHeader from './header.html.js';
import renderFooter from './footer.html.js';
import renderTodos from './todos.html.js';

export default todos => html`
	<section class="todoapp">
		${renderHeader(todos)}
		${renderTodos(todos)}
		${todos.todoCount > 0 && renderFooter(todos)}
	</section>
`;
