import React, {Component} from 'react';
import Select from 'react-select';

export default class FormSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {selectedOption: props.value};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption) {
        this.setState({selectedOption});
    };

    render() {
        return (
            <Select
                value={this.state.selectedOption}
                key={this.props.uniqueKey}
                onChange={this.handleChange}
                options={this.props.options}
                placeholder={this.props.placeholder}
                isSearchable={this.props.isSearchable}
                name={this.props.name}
            />
        );
    }
}