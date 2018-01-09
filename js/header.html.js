import html from 'bel';

const ENTER_KEY = 13;

const renderHeader = todos => html`
	<header class="header">
		<h1>todos</h1>
		<input
			class="new-todo"
			placeholder="What needs to be done?"
			autofocus
			onkeypress=${({target, keyCode}) => {
				if(keyCode === ENTER_KEY) {
					todos.addTodo(target.value);
					target.value = '';
				}
			}}
			onblur=${e => todos.addTodo(e.target.value)}
		/>
	</header>
`;

export default renderHeader;
