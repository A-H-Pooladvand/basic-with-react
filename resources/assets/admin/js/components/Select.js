import React, {Component} from 'react';

export default class Select extends Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={`input_${this.props.name}`}>{this.props.title}</label>
                <select name={this.props.name} id={`input_${this.props.name}`} className={this.props.className}>
                    {this.props.options.map(item => <option key={item.id} value={this.props.identical ? item.title : item.value}>{item.title}</option>)}
                </select>
            </div>
        );
    }
}