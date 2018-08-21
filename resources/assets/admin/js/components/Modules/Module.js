import React, {Component} from 'react';
import axios from 'axios';
import Input from "../form/Input";
import routes from '../../routes.json';
import Select from '../Select';

export default class Module extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataTypes: [],
            selectIndexKey: 0,
            selects: ['input-0']
        };

        this.getDataTypes = this.getDataTypes.bind(this);
        this.appendSelects = this.appendSelects.bind(this);
    }

    componentWillMount() {
        this.getDataTypes();
    }

    getDataTypes() {
        axios.post(routes.dataTypes.path).then(response => {
            this.setState({
                dataTypes: response.data.map(item => {
                    return {
                        value: item.title,
                        label: item.title
                    };
                })
            });
        });
    }


    appendSelects() {
        let newInput = `input-${this.state.selects.length}`;
        this.setState({selects: this.state.selects.concat([newInput])});
    }

    render() {

        return (
            <div>
                <div className='row'>

                    <div className="col-sm-6 col-md-4">
                        <Input title='عنوان ماژول' name='title'/>
                    </div>

                    <div className="w-100"/>

                    <div className="col-sm-6 col-md-4">

                        <div className="row">
                            <div className="col-md-9">

                                <label htmlFor="input_data_types">انتخاب فیلد های دیتابیس</label>
                                {this.state.selects.map((select) => {
                                    return (
                                        <div className='form-group'>
                                            <Select name='data_types[]' uniqueKey={select} options={this.state.dataTypes} placeholder='انتخاب نمایید' isSearchable={true}/>
                                        </div>
                                    );
                                })}

                            </div>

                            <div className="col-md-3">
                                <label htmlFor="input_data_types" className='invisible'>Invisible</label>

                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" onClick={this.appendSelects}>بیشتر</button>
                                </div>

                                {this.state.selects.map((select, index) => {

                                    if (index === 0) return null;

                                    return (
                                        <div className='form-group'>
                                            <button className="btn btn-primary btn-block" onClick={() => {
                                                console.log(this);
                                            }}>
                                                <i className='fa fa-trash-alt'/>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
