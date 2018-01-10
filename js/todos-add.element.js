export default class TodosAddElement extends HTMLElement {
	constructor() {
		super();

		this.addEventListener('keypress', (e) => this.addTodo(e));
		this.addEventListener('focusout', (e) => this.addTodo(e));
	}

	addTodo() {
		const { key, target, type } = event;

		if (type === 'keypress' && key !== 'Enter') {
			return;
		}

		console.log('add todo plz', target.value);
		// this.store.addTodo(target.value);

		target.value = '';
	}
}
