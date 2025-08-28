import { Component, useState } from '@odoo/owl';
import {registry} from '@web/core/registry';


export class Counter extends Component {
  static template = 'awesome_owl.Counter';

  setup() {
    this.state = useState({ value: 0 });
  }

  increment() {
    this.state.value++;
  }
}

registry.category('actions').add('awesome_owl.Counter_App_Action', Counter);
