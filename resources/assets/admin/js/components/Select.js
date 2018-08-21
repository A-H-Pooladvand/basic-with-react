import React, {Component} from 'react';
import Select from 'react-select';

export default class FormSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {selectedOption: props.selectedOptions};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption) {
        console.log(selectedOption);
        this.setState({selectedOption});
    };

    render() {
        return (
            <Select
                key={this.props.uniqueKey}
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.props.options}
                placeholder={this.props.placeholder}
                isSearchable={this.props.isSearchable}
                name={this.props.name}
            />
        );
    }
}