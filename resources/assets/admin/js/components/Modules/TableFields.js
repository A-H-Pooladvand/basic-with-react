import React, {Component} from 'react';
import axios from "axios";
import routes from "../../routes.json";
import Select from '../../components/Select';
import '../../helpers/Helper';

export default class TableFields extends Component {

    constructor(props) {
        super(props);
        this.state = {data: [], tableName: ''};

        this.getData = this.getData.bind(this);
    }

    componentDidUpdate() {
        console.log(this.props.tableName);
        if (this.props.tableName === this.state.tableName || this.props.tableName === "") {
            return null;
        }

        this.getData();
    }

    getData() {
        axios.post(routes.tables.fields.path, {tableName: this.props.tableName}).then(response => {
            this.setState({
                tableName: this.props.tableName,
                data: response.data.toSelectFormat()
            });
        });
    }

    render() {
        return (
            <div className='form-group'>
                <Select name={this.props.name} handleChange={this.props.onChange} className='text-left dir-left' options={this.state.data}/>
            </div>
        );
    }
};