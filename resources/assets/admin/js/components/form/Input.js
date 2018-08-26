import React, {Component} from 'react';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.isLabel = this.isLabel.bind(this);
    }


    isLabel() {
        if (false === this.props.label) {
            return '';
        }

        return <label title={this.props.caption} htmlFor={`input_${this.props.name}`}>{this.props.title}</label>;
    }

    render() {

        return (
            <div className="form-group">

                {this.isLabel()}

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