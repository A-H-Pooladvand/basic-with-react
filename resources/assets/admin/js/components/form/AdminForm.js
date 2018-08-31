import React, {Component} from 'react';
import {formPost} from "../../helpers/ajax";
import routes from '../../routes.json';
import Toolbar from "./Toolbar";

class AdminForm extends Component {

    postForm(event) {
        formPost(routes.module.store.path, event);
    }

    render() {
        return (
            <form id='form' action="#" onSubmit={this.postForm.bind(this)}>

                <Toolbar/>

                {this.props.children}
            </form>
        );
    }

}

export default AdminForm;