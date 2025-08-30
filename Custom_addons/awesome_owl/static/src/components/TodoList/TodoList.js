import { Component, useState, useRef, onMounted } from '@odoo/owl';
import { registry } from '@web/core/registry';
import { TodoItem } from './TodoItem';

export class TodoList extends Component {
  static template = 'awesome_owl.TodoList';

  static components = { TodoItem };

  setup() {
    this.state = useState({
      todos: [],
      newTodo: '',
    });

    this.inputRef = useRef('Active_Input');

    onMounted(() => {
      this.inputRef.el.focus();
    });

    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo() {
    if (this.state.newTodo) {
      this.state.todos.push({
        id: Date.now(),
        description: this.state.newTodo.trim(),
        isCompleted: false,
      });
      this.state.newTodo = '';
    }
  }

  toggleTodo(todoId) {
    const todo = this.state.todos.find((t) => t.id === todoId);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }

  removeTodo(todoId) {
    this.state.todos = this.state.todos.filter((t) => t.id !== todoId);
  }
}

registry.category('actions').add('awesome_owl.TodoList_Action', TodoList);
