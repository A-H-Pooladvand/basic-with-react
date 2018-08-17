import React, {Component} from 'react';
import image from "../../files/pictures/_test/1.jpg";

export default class Header extends Component {
    render() {
        return (
            <header className={this.props.className}>
                <h3 className='brand-name'>
                    <a href="#" className='text-uppercase'>Logo</a>
                </h3>
                <a className='ml-2' href='#'>
                    <img className='avatar' src={image} alt="alt"/>
                </a>
            </header>
        );
    }
}