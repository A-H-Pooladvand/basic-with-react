import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={`input_${this.props.name}`}>عنوان</label>
                <input
                    name={this.props.name}
                    type={this.props.name}
                    className="form-control"
                    id={`input_${this.props.name}`}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}