import React, {Component} from 'react';
import axios from 'axios';
import Input from "../form/Input";
import routes from '../../routes.json';
import Select from 'react-select';
import {formPost} from '../../helpers/ajax';
import DataType from "./DataType";
import Tables from "./Tables";

export default class Module extends Component {

    constructor(props) {
        super(props);
        this.selectCounter = 0;
        this.state = {
            dataTypes: [],
            selectIndexKey: 0,
            selects: [{id: 0}],
            tables: [],
            tableFields: []
        };

        this.addSelect = this.addSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addSelect() {
        this.setState({selects: this.state.selects.concat({id: ++this.selectCounter, value: ''})});
    }

    handleSubmit(e) {
        formPost(routes.module.store.path, e);
    }

    handleChange(value, index, key) {
        const selects = this.state.selects;

        selects[index][key] = value;

        this.setState({selects});
    }

    render() {

        return (
            <div>
                <form action="#" method='POST' onSubmit={this.handleSubmit}>

                    <div className='row'>
                        <div className="col-sm-6 col-md-4">
                            <Input title='عنوان ماژول' name='title'/>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-2">
                            {
                                this.state.selects.map((select, index) => {
                                    return <Input dir='ltr' key={select.id} title={index === 0 ? 'عنوان فیلد' : ''} name='fields[]' label={index === 0} placeholder='Field Title'/>
                                })
                            }
                        </div>

                        <div className="col-lg-2">

                            <label htmlFor="input_data_types">انتخاب فیلد های دیتابیس</label>
                            {
                                this.state.selects.map((select, index) => {
                                    return (
                                        <div className='form-group' key={select.id}>
                                            <DataType index={index} select={select}/>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div className="col-md-2">
                            {
                                this.state.selects.map((select, index) => {
                                    return <Input dir='ltr' key={select.id} title={index === 0 ? 'موارد اضافی' : ''} name='fields_options[]' label={index === 0} placeholder='Extra options'/>
                                })
                            }
                        </div>

                        <div className="col-lg-2">

                            <label htmlFor="input_tables">کلید خارجی</label>
                            {this.state.selects.map((select, index) => {
                                return (
                                    <div className='form-group' key={select.id}>
                                        <Tables index={index} select={select}/>
                                    </div>
                                );
                            })}

                        </div>

                        <div className="col-lg-2">

                            <label htmlFor="input_foreign_fields[]">فیلد</label>
                            {this.state.selects.map((select, index) => {
                                return (
                                    <div className='form-group' key={select.id}>
                                        <Select name='foreign_fields[]'
                                                value={select['foreign_fields']}
                                                onChange={(selected) => this.handleChange(selected, index, 'foreign_fields')}
                                                options={this.state.tables} placeholder='انتخاب نمایید' isSearchable={true}
                                        />
                                    </div>
                                );
                            })}

                        </div>

                        <div className="col-lg-1">
                            <label htmlFor="input_data_types" className='invisible'>Invisible</label>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type='button' onClick={this.addSelect}>بیشتر</button>
                            </div>

                            {this.state.selects.map((select, index) => {

                                if (index === 0) return null;

                                return (
                                    <div className='form-group' key={select.id}>
                                        <button className="btn btn-primary btn-block" onClick={() => {
                                            this.setState({
                                                selects: this.state.selects.filter((item, key) => key !== index)
                                            });
                                        }}>
                                            <i className='fa fa-trash-alt'/>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    <button className="btn btn-primary">ارسال</button>
                </form>
            </div>
        );
    }
}
