import React, {Component} from 'react';
import axios from 'axios';
import Input from "../form/Input";
import routes from '../../routes.json';


export default class Module extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataTypes: [],
        };

        this.getDatabaseDataTypes = this.getDatabaseDataTypes.bind(this);
    }

    componentWillMount() {
        this.getDatabaseDataTypes();
    }

    getDatabaseDataTypes() {
        axios.post(routes.dataTypes.path).then(response => {
            this.setState({dataTypes: response.data});
        });
    }

    render() {

        return (
            <div className='row'>

                <div className="col-sm-6 col-md-4">
                    <Input title='عنوان ماژول' name='title'/>
                </div>

                <div className="w-100"/>

                <div className="col-sm-6 col-md-4">
                    <div className="form-group">
                        {/*<Select identical={true} className='form-control' name='data_types[]' options={this.state.dataTypes}/>*/}

                    </div>
                </div>

            </div>
        );
    }
}