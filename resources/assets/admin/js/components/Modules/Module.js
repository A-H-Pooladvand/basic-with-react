import React, {Component} from 'react';
import Input from "../form/Input";
import DataType from "./DataType";
import DatabaseTables from "./DatabaseTables";
import AdminForm from "../form/AdminForm";
import FormSelect from "../Select";
import OptionalOptions from '../../data/module/OptionalOptions.json';

class Module extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableNames: [''],
            rows: [0]
        };
    }

    handleChange(event, index) {
        let tableNames = this.state.tableNames;
        tableNames[index] = event.value;
        this.setState({tableNames: tableNames});
    }

    handleClick() {
        this.setState({
            rows: [...this.state.rows, this.state.rows.length],
            tableNames: [...this.state.tableNames, '']
        });
    }

    handleDelete(index) {
        let rows = this.state.rows;
        rows.splice(index, 1);
        this.setState({rows: rows});
    }

    render() {
        return (
            <div>
                <AdminForm>

                    <div className="row">

                        <div className="col-sm-3">
                            <Input dir='ltr' name='title' label={true} title='عنوان ماژول'/>
                        </div>

                        <div className="w-100"/>

                        <div className="col-sm-2">
                            {
                                this.state.rows.map(row => {
                                    return <Input name='fields[]' key={row} dir='ltr' title={row === 0 ? 'عنوان ستون' : ''}/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            {
                                this.state.rows.map(row => {
                                    return <Input key={row} name='fields_options[]' dir='ltr' title={row === 0 ? 'مشخصات' : ''}/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="data_types">نوع داده</label>
                            {
                                this.state.rows.map(row => {
                                    return <DataType name='data_types[]' key={row}/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="data_types">کلید خارجی</label>
                            {
                                this.state.rows.map((row, index) => {
                                    return <DatabaseTables name='tables[]' key={row} onChange={(e) => {
                                        this.handleChange(e, index)
                                    }
                                    }/>
                                })
                            }
                        </div>

                        {/*<div className="col-sm-2">
                            <label htmlFor="data_types">کلید خارجی (انتخاب ستون)</label>
                            {
                                this.state.rows.map((row, index) => {
                                    return <TableFields name='tables_fields[]' key={row} tableName={this.state.tableNames[index]}/>
                                })
                            }
                        </div>*/}

                        <div className="col-sm-2">
                            <label htmlFor="input_optional">موارد اختیاری</label>
                            {
                                this.state.rows.map((row) => {
                                    return (
                                        <div className='form-group' key={row}>
                                            <FormSelect key={row} className='dir-left text-left' isMulti={true} name='optional_options' options={OptionalOptions.options}/>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div className="col-sm-1">
                            {
                                this.state.rows.map(row => {
                                    return <Input name='default_values[]' key={row} dir='ltr' title={row === 0 ? 'پیش فرض' : ''}/>
                                })
                            }
                        </div>

                        <div className="col-sm-1">
                            <label htmlFor="button" className='invisible'>عملیات</label>
                            {
                                this.state.rows.map((row, index) => {
                                    return row === 0 ?
                                        (
                                            <div className='form-group' key={row}>
                                                <button onClick={this.handleClick.bind(this)} type='button' className='btn btn-primary btn-block'>بیشتر</button>
                                            </div>
                                        ) :
                                        (
                                            <div className='form-group' key={row}>
                                                <button onClick={() => {
                                                    this.handleDelete(index)
                                                }} type='button' className='btn btn-danger btn-block'>
                                                    <i className="fas fa-trash-alt"/>
                                                </button>
                                            </div>
                                        )
                                })
                            }
                        </div>

                    </div>

                </AdminForm>
            </div>
        );
    };
}

export default Module;