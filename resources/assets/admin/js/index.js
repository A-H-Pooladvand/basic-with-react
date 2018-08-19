import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import '../../../../public/_init.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Panel from "./components/Panel";

class Main extends Component {

    render() {

        return (
            <Router>
                <Route path={"/admin"} component={Panel} />
            </Router>
        );
    }
}



ReactDOM.render(<Main/>, document.getElementById('root'));