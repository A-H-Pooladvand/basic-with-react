import React, {Component} from 'react';
import Input from "../form/Input";

export default class Module extends Component {
    render() {
        return (
            <div className='row'>

                <div className="col-sm-6 col-md-4">
                    <Input name='title'/>
                </div>

            </div>
        );
    }
}