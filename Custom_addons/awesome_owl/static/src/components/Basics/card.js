import { Component, useState } from '@odoo/owl';

export class Card extends Component {
  static template = 'awesome_owl.card';

  // Props validation
  // static props = {
  //   title: { type: String, optional: true },
  //   content: { type: String, optional: true },
  //   onClick: { type: Function, optional: true },
  //   markUpValue: { type: String, optional: true },
  //   stateValue: { type: Number, optional: true },

  // };

  setup() {
    this.state = useState({ showContent: false });
  }

  handle_Click() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  toggleContent() {
    this.state.showContent = !this.state.showContent;
  }
}
