import html from 'bel';
import renderTodo from './todo.html.js';

const renderTodos = todos => html`
	<section class="main">
		${todos.todoCount > 0 ? html`
			<input
				id="toggle-all"
				class="toggle-all"
				type="checkbox"
				onchange=${e => todos.toggleAll()}
				${todos.completedCount - todos.todoCount === 0 ? 'checked' : ''}
			/>
		` : null}
		${todos.todoCount > 0 ? html`
			<label for="toggle-all">Mark all as complete</label>
		` : null}
		<ul class="todo-list">
			${todos.filteredTodos.map(renderTodo(todos))}
		</ul>
	</section>
`;

export default renderTodos;
