import { observable, computed } from 'mobx';

export default class TodoStore {
  @observable todos = [];

  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed).length;
  }

  @computed get allTodosCount() {
    return this.todos.length;
  }

  addTodo(text) {
    const itemsCount = this.todos.length;
    const newTodoId = itemsCount > 0 ? this.todos[itemsCount - 1].id + 1 : 1;

    this.todos.push({
      id: newTodoId,
      text,
      completed: false
    })
  }

  toJS() {
    return this.todos.slice();
  }

  static fromJS(initialTodos) {
    const store = new TodoStore();
    store.todos = initialTodos;
    return store;
  }
};
