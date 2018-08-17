import React, {Component} from 'react';
import Header from "./Navbar/Header";
import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Routes from '../routes.json'
import Dashboard from "./Modules/Dashboard";

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
                        <Router>
                            <Route path={Routes.home} component={Dashboard} />
                        </Router>
                    </section>

                </section>

            </main>
        );
    }
}