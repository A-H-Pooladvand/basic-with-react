import React, {Component} from 'react';

export default class Anchor extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.consoleRef = this.consoleRef.bind(this);
    }
    
    render() {
        return (
            <a ref={this.myRef} href={this.props.href} onClick={this.consoleRef}>
                {this.props.icon && <i className={`fas fa-${this.props.icon} list-fw`}/>}
                {this.props.value}
                {this.props.children}
            </a>
        );
    }
}