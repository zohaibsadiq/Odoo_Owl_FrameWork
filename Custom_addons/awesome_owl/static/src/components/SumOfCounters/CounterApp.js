import { Component, useState } from '@odoo/owl';

export class CounterApp extends Component {
  static template = 'awesome_owl.CounterApp';

  setup() {
    this.state = useState({ count: 0 });
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.state.count++;
    if (this.props.onChange) {
      this.props.onChange();
    }
  }
}
