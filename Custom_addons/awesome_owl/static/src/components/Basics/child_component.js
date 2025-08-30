import {Component} from "@odoo/owl";

export class ChildComponent extends Component {
    static template = "awesome_owl.child_component";

    // Props validation
    static props ={
        value: Number,
    }

    get_double_value() {
        return this.props.value * 2;
    }

}


