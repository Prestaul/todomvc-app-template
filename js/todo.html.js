import { html } from 'apply-html';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default todos => todo => html`
	<li
		id="todo-${todo.id}"
		class="${todo.editing ? 'editing' : todo.completed ? 'completed' : ''}"
	>
		<div class="view">
			<input
				class="toggle"
				type="checkbox"
				${todo.completed ? 'checked' : ''}
				onchange=${e => todos.toggleTodo(todo.id)}
			/>
			<label
				ondblclick=${e => todos.editTodo(todo.id)}
			>${todo.title}</label>
			<button
				class="destroy"
				onclick=${e => todos.deleteTodo(todo.id)}
			></button>
		</div>
		${todo.editing && html`
			<input
				class="edit"
				value="${todo.title}"
				autofocus
				onkeypress=${({target, keyCode}) => {
					if(keyCode === ENTER_KEY) {
						todos.endEditTodo(todo.id, target.value);
					}
				}}
				onblur=${e => {
					// Blur fires when this is removed from DOM so ensure we were actually editing it still
					if(todo.editing) {
						todos.endEditTodo(todo.id, e.target.value);
					}
				}}
				onkeyup=${e => {
					if(e.keyCode === ESCAPE_KEY) {
						todos.endEditTodo(todo.id, todo.title);
					}
				}}
			/>
		`}
	</li>
`;
