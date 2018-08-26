import React, {Component} from 'react';
import axios from 'axios';
import Input from "../form/Input";
import routes from '../../routes.json';
import Select from '../Select';
import {formPost} from '../../helpers/ajax';

export default class Module extends Component {

    constructor(props) {
        super(props);
        this.selectCounter = 0;
        this.state = {
            dataTypes: [],
            selectIndexKey: 0,
            selects: [{id: 0, value: ''}]
        };

        this.getDataTypes = this.getDataTypes.bind(this);
        this.addSelect = this.addSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    addSelect() {
        this.setState({selects: this.state.selects.concat({id: ++this.selectCounter, value: ''})});
    }

    handleSubmit(e) {
        formPost(routes.module.store.path, e);
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
                                    return <Input key={select.id} title={index === 0 ? 'عنوان فیلد' : ''} name='fields[]' label={index === 0} placeholder='عنوان فیلد'/>
                                })
                            }
                        </div>

                        <div className="col-lg-3">

                            <label htmlFor="input_data_types">انتخاب فیلد های دیتابیس</label>
                            {this.state.selects.map((select) => {
                                return (
                                    <div className='form-group'>
                                        <Select name='data_types[]' value={select.value} uniqueKey={select.id} options={this.state.dataTypes} placeholder='انتخاب نمایید' isSearchable={true}/>
                                    </div>
                                );
                            })}

                        </div>

                        <div className="col-lg-1">
                            <label htmlFor="input_data_types" className='invisible'>Invisible</label>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" onClick={this.addSelect}>بیشتر</button>
                            </div>

                            {this.state.selects.map((select, index) => {

                                if (index === 0) return null;

                                return (
                                    <div className='form-group'>
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
