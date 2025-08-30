import { Component } from '@odoo/owl';

export class TodoItem extends Component {
  static template = 'awesome_owl.TodoItem';

  static props = {
    todo: {
      type: Array,
      required: false,
      elements: {
        type: Object,
        props: {
          id: { type: Number, required: true },
          description: { type: String, required: true },
          isCompleted: { type: Boolean, required: true },
        },
      },
    },
    toggleTodo: {
      type: Function,
      required: true,
    },

    removeTodo: {
      type: Function,
      required: true,
    },
  };
}
