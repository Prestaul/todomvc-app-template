import { html } from 'apply-html';
import renderTodo from './todo.html.js';

export default todos => html`
	<section class="main">
		${todos.todoCount > 0 && html`
			<input
				id="toggle-all"
				class="toggle-all"
				type="checkbox"
				onchange=${e => todos.toggleAll()}
				${todos.completedCount - todos.todoCount === 0 ? 'checked' : ''}
			/>
		`}
		${todos.todoCount > 0 && html`
			<label for="toggle-all">Mark all as complete</label>
		`}
		<ul class="todo-list">
			${todos.filteredTodos.map(renderTodo(todos))}
		</ul>
	</section>
`;
