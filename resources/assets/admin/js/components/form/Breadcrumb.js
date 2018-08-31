import React, {Component} from 'react';

class Breadcrumb extends Component {

    render() {
        return (
            <ol className='breadcrumb'>
                <li className="breadcrumb-item">
                    <a href="#">
                        <i className="fa fa-home fa-inverse ml-2" aria-hidden="true"/>
                        <span>خانه</span>
                    </a>
                </li>
                <li className="breadcrumb-item"><a href="#">لیست ماژول ها</a></li>
                <li className="breadcrumb-item active" aria-current="page">ماژول</li>
            </ol>
        );
    }

}

export default Breadcrumb;