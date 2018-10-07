import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoStore from './TodoStore';
import * as serviceWorker from './serviceWorker';
import { createPersistedStore } from './utils';

const TODOS_STORAGE_KEY = 'todo-list-mobx';
const defaultTodos = [{ id: 1, text: 'Add some items to the list.', completed: false }];

const todoStore = createPersistedStore(
  TodoStore,
  { defaultValue: defaultTodos, storageKey: TODOS_STORAGE_KEY }
);

ReactDOM.render(<App todoStore={todoStore} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
