import { Component, useState, markup } from '@odoo/owl';
import { registry } from '@web/core/registry';
import { ChildComponent } from './child_component';
import { Card } from './card';

export class Counter extends Component {
  static template = 'awesome_owl.Counter';
  static components = { ChildComponent, Card };

  setup() {
    this.state = useState({ value: 0 });
    this.increment = this.increment.bind(this);
    this.html = markup('<h1>Hello World</h1>');
    this.stateSum = 0;
  }

  increment() {
    this.state.value++;
  }

  incrementSum(){
    return this.stateSum += this.state.value;
  }
}

registry.category('actions').add('awesome_owl.Counter_App_Action', Counter);
