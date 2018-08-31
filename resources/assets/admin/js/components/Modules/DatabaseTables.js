import React, {Component} from 'react';
import axios from "axios";
import routes from "../../routes.json";
import Select from '../../components/Select';
import '../../helpers/Helper';

export default class DatabaseTables extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};

        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        axios.post(routes.tables.index.path).then(response => {
            this.setState({
                data: response.data.toSelectFormat()
            });
        });
    }

    render() {
        return (
            <div className='form-group'>
                <Select handleChange={this.props.onChange} className='text-left dir-left' options={this.state.data}/>
            </div>
        );
    }
}