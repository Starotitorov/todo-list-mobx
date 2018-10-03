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
    this.todos.push({
      text,
      completed: false
    })
  }

  static fromJs(initialTodos) {
    const store = new TodoStore();
    store.todos = initialTodos;
    return store;
  }
};
