import html from 'bel';

const renderFooter = (todos) => html`
	<footer class="footer">
		<!-- This should be '0 items left' by default -->
		<span class="todo-count">
			<strong>${todos.todoCount - todos.completedCount}</strong>
			item${todos.todoCount - todos.completedCount !== 1 ? 's' : ''} left
		</span>
		<!-- Remove this if you do not implement routing -->
		<ul class="filters">
			<li>
				<a class="${todos.filter === '' ? 'selected' : ''}" href="#/">All</a>
			</li>
			<li>
				<a class="${todos.filter === 'active' ? 'selected' : ''}" href="#/active">Active</a>
			</li>
			<li>
				<a class="${todos.filter === 'completed' ? 'selected' : ''}" href="#/completed">Completed</a>
			</li>
		</ul>
		<!-- Hidden if no completed items are left ↓ -->
		${todos.completedCount > 0 ? html`
			<button
				class="clear-completed"
				onclick=${e => todos.deleteCompleted()}
			>
				Clear completed
			</button>
		` : null
		}
	</footer>
`;

export default renderFooter;
