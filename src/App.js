import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';

@observer class App extends Component {
  handleAddTodo = e => {
    e.preventDefault();

    const text = this.form.text.value;
    this.props.todoStore.addTodo(text);

    this.form.reset();
  };

  render() {
    const { todoStore } = this.props;
    return (
      <div className="app">
        <h1>Todo list app</h1>
        <form className="add-form" ref={el => this.form = el} onSubmit={this.handleAddTodo}>
          <input className="add-form__text" name="text" />
          <button type="submit">Add item</button>
        </form>
        <h3>Items:</h3>
        <ul className="list">
          {todoStore.todos.map(({ text, id }) => <li key={id}>{ text }</li>)}
        </ul>
        <p>All todos count: {todoStore.allTodosCount}</p>
        <p>Completed todos count: {todoStore.completedTodosCount}</p>
      </div>
    );
  }
}

export default App;
