import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <div className='form-group'>

                {this.props.title ? <label title={this.props.caption} htmlFor={`input_${this.props.name}`}>{this.props.title}</label> : ''}

                <input
                    dir={this.props.dir}
                    name={this.props.name || 'title'}
                    type={this.props.type || 'text'}
                    className='form-control'
                    id={`input_${this.props.name}`}
                    placeholder={this.props.placeholder}
                />
                {/*<div className="valid-feedback">لطفا آدرس درستی مشخص نمایید</div>*/}
            </div>
        );
    }
}