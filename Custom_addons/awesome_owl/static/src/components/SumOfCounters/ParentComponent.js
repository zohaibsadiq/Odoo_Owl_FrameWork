import { Component, useState } from '@odoo/owl';
import { registry } from '@web/core/registry';
import { CounterApp } from './CounterApp';

export class SumOfCounters extends Component {
  static template = 'awesome_owl.SumOfCounters';

  static components = { CounterApp };

  setup() {
    this.state = useState({ sum: 0, counter1: 0, counter2: 0 });
    this.updateCounter1 = this.updateCounter1.bind(this);
    this.updateCounter2 = this.updateCounter2.bind(this);
  }

  updateCounter1() {
    this.state.counter1++;
    this.state.sum = this.state.counter1 + this.state.counter2;
  }

  updateCounter2() {
    this.state.counter2++;
    this.state.sum = this.state.counter1 + this.state.counter2;
  }
}

registry.category('actions').add('awesome_owl.SumOfCounters_Action', SumOfCounters);
