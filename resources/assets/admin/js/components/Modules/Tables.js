import React, {Component} from 'react';
import Select from 'react-select';
import axios from "axios";
import routes from "../../routes.json";

export default class DataType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selects: [{id: 0}],
            data: []
        };

        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    handleChange(value, index) {
        const selects = this.state.selects;

        selects[index] = value;

        this.setState({selects});
    }

    getData() {
        axios.post(routes.tables.index.path).then(response => {
            this.setState({
                data: response.data.map(item => {
                    return {
                        value: item,
                        label: item
                    }
                })
            });
        });
    }

    render() {
        return (
            <Select
                name='tables[]'
                onChange={(selected) => this.handleChange(selected, this.props.index)}
                options={this.state.data}
                placeholder='انتخاب نمایید'
                isSearchable={true}
            />
        );
    }
}