import { html } from 'apply-html';

export default todos => html`
	<header class="header">
		<h1>todos</h1>
		<todos-add>
			<input
				class="new-todo"
				placeholder="What needs to be done?"
				autofocus
			/>
		<todos-add>
	</header>
`;
