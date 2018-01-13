import makeEmitter from 'listen-up';

const makeTodo = ({ id, title, completed = false }) => ({
	id,
	title,
	completed,
	editing: false
});

export default (savedTodos = []) => makeEmitter({
	todos: savedTodos.map(makeTodo),

	get filter() {
		const { hash } = document.location;
		return hash && hash.substr(2).toLowerCase();
	},

	get filteredTodos() {
		const filter = this.filter;
		if(!filter) {
			return this.todos;
		}
		const completed = filter === 'completed';
		return this.todos.filter(todo => todo.completed === completed);
	},

	get todoCount() {
		return this.todos.length;
	},

	get completedCount() {
		return this.todos.reduce((sum, todo) => sum + (todo.completed ? 1 : 0), 0);
	},

	addTodo(title) {
		title = title && title.trim();
		if(title) {
			this.todos.push(makeTodo({
				id: Math.max(0, ...this.todos.map(todo => todo.id)) + 1,
				title
			}));
			this.emit('updated');
		}
	},

	toggleTodo(id) {
		const todo = this.todos.find(todo => todo.id === id);
		if(todo) {
			todo.completed = !todo.completed;
			this.emit('updated');
		}
	},

	toggleAll() {
		const completed = this.completedCount < this.todoCount;
		this.todos.forEach(todo => todo.completed = completed);
		this.emit('updated');
	},

	editTodo(id) {
		const todo = this.todos.find(todo => todo.id === id);
		if(todo) {
			todo.editing = true;
			this.emit('updated');
		}
	},

	endEditTodo(id, newTitle) {
		newTitle = newTitle && newTitle.trim();
		if(!newTitle) {
			return this.deleteTodo(id);
		}
		const todo = this.todos.find(todo => todo.id === id);
		if(todo) {
			todo.editing = false;
			todo.title = newTitle;
			this.emit('updated');
		}
	},

	deleteTodo(id) {
		const idx = this.todos.findIndex(todo => todo.id === id);
		if(idx >= 0) {
			this.todos.splice(idx, 1);
			this.emit('updated');
		}
	},

	deleteCompleted() {
		this.todos = this.todos.filter(todo => !todo.completed);
		this.emit('updated');
	},

	toJSON() {
		return this.todos.map(({id, title, completed}) => ({id, title, completed}));
	}
});
