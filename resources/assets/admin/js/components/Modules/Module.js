import React, {Component} from 'react';
import Input from "../form/Input";
import DataType from "./DataType";
import DatabaseTables from "./DatabaseTables";
import TableFields from "./TableFields";
import AdminForm from "../form/AdminForm";

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
        }, () => {
            console.log(this.state.tableNames);
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
                            <Input dir='ltr' label={true} title='عنوان ماژول'/>
                        </div>

                        <div className="w-100"/>

                        <div className="col-sm-2">
                            {
                                this.state.rows.map(row => {
                                    return <Input key={row} dir='ltr' title={row === 0 ? 'عنوان فیلد' : ''}/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            {
                                this.state.rows.map(row => {
                                    return <Input key={row} dir='ltr' title={row === 0 ? 'مشخصات' : ''}/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="data_types">نوع</label>
                            {
                                this.state.rows.map(row => {
                                    return <DataType key={row}/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="data_types">کلید خارجی</label>
                            {
                                this.state.rows.map((row, index) => {
                                    return <DatabaseTables key={row} onChange={(e) => {
                                        this.handleChange(e, index)
                                    }
                                    }/>
                                })
                            }
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="data_types">فیلد</label>
                            {
                                this.state.rows.map((row, index) => {
                                    return <TableFields key={row} tableName={this.state.tableNames[index]}/>
                                })
                            }
                        </div>

                        <div className="col-sm-1">
                            <label htmlFor="data_types" className='invisible'>عملیات</label>
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