import React, {Component} from 'react';
import Select from 'react-select';

export default class FormSelect extends Component {
    render() {
        return (
            <Select
                className={this.props.className}
                value={this.props.value}
                onChange={this.props.handleChange}
                options={this.props.options}
                placeholder={this.props.placeholder || 'انتخاب نمایید'}
                isSearchable={this.props.isSearchable || true}
                name={this.props.name}
                isDisabled={this.props.isDisabled || false}
            />
        );
    }
}