import React, {Component} from 'react';
import axios from "axios";
import routes from "../../routes.json";
import Select from "../Select";
import '../../helpers/Helper';

export default class DataType extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};

        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        axios.post(routes.dataTypes.path).then(response => {
            this.setState({data: response.data.toSelectFormat('value', 'title')});
        });
    }

    render() {
        return (
            <div className='form-group'>
                <Select className='text-left dir-left' name='data_types[]' handleChange={this.props.handleChange} options={this.state.data}/>
            </div>
        );
    }
}