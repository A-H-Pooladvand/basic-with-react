import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label title={this.props.caption} htmlFor={`input_${this.props.name}`}>{this.props.title}</label>
                <input
                    name={this.props.name}
                    type={this.props.name}
                    className="form-control"
                    id={`input_${this.props.name}`}
                    placeholder={this.props.placeholder}
                />
                {/*<div className="valid-feedback">لطفا آدرس درستی مشخص نمایید</div>*/}
            </div>
        );
    }
}