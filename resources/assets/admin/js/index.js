import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../../public/assets/admin.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Panel from "./components/Panel";
import Routes from './routes.json';

class Main extends Component {

    render() {

        return (
            <Router>
                <Route path={Routes.home} component={Panel} />
            </Router>
        );
    }
}



ReactDOM.render(<Main/>, document.getElementById('root'));