import React, {Component} from 'react';
import Breadcrumb from "./Breadcrumb";

class Toolbar extends Component {

    render() {
        return (
            <div className='toolbar d-flex justify-content-between align-items-center'>

                <Breadcrumb/>

                <div className="btn-group" role="group" aria-label="Toolbar buttons">
                    <button form='form' className='btn btn-success'>ذخیره</button>
                    <button className='btn btn-secondary'>بازگشت</button>
                </div>

            </div>
        );
    }

}

export default Toolbar;