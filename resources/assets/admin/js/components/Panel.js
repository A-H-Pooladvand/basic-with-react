import React, {Component} from 'react';
import Header from "./Navbar/Header";
import Sidebar from "./Sidebar/Sidebar";
import {Route, Switch} from 'react-router-dom';
import Routes from '../routes.json'
import Dashboard from "./Modules/Dashboard";
import Module from "./Modules/Module";

export default class Panel extends Component {

    render() {
        return (
            <main className='panel__container'>

                <Header className='panel__navbar position-relative'/>

                <section className="panel__section">

                    <aside className='panel__sidebar'>
                        <Sidebar/>
                    </aside>

                    <section className='panel__content'>
                        <Switch>
                            <Route path={`${this.props.match.url}${Routes.module.create.path}`} component={Module}/>
                            <Route path={`${this.props.match.url}${Routes.home.path}`} component={Dashboard}/>
                        </Switch>
                    </section>

                </section>

            </main>
        );
    }
}