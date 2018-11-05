import React, {Component} from 'react';
import Input from "../form/Input";
import AdminForm from "../form/AdminForm";
import routes from '../../routes.json';

export default class User extends Component {
    render() {
        return (
            <div>
                <AdminForm path={routes.user.store.path}>

                    <div className='row'>

                        <div className="col-sm-8">

                            <Input title='نام' name='first_name'/>

                            <Input title='نام خانوادگی' name='last_name'/>

                            <Input dir='ltr' title='ایمیل' name='email'/>

                            <Input dir='ltr' title='تلفن همراه' name='mobile'/>

                            <Input title='نام کاربری' name='username'/>

                        </div>

                        <div className="col-sm-4">

                            <Input type='password' dir='ltr' title='رمز عبور' name='password'/>

                            <Input type='password' dir='ltr' title='تکرار رمز عبور' name='password_confirmation'/>

                        </div>

                    </div>

                </AdminForm>

            </div>
        );
    }
}
