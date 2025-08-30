import { Component } from '@odoo/owl';
import { registry } from '@web/core/registry';
import { Layout } from '@web/search/layout';
import { useService } from '@web/core/utils/hooks';

export class Dashboard extends Component {
  static template = 'awesome_dashBoard.Dashboard';
  static components = { Layout };

  setup() {
    this.sharedState = useService("shared_state");
    this.state = this.sharedState.state; // reactive object
  }

  setName() {
    this.sharedState.setValue("name", "Zohaib");
  }

  clearName() {
    this.sharedState.setValue("name", null);
  }
}

registry.category('actions').add('awesome_dashBoard.Dashboard_Action', Dashboard);
