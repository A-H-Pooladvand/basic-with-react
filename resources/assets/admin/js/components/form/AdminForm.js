import React, {Component} from 'react';
import {formPost} from "../../helpers/ajax";
import Toolbar from "./Toolbar";

class AdminForm extends Component {

    postForm(event) {
        formPost(this.props.path, event);
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
