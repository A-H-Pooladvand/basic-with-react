import React, {Component} from 'react';
import $ from "../../helpers/jquery";
import {NavLink, Link} from 'react-router-dom';
import axios from "axios";
import Routes from "../../routes.json";

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.toggleRef = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.state = {checker: true, menu: []};
        this.createSidebarSubMenu = this.createSidebarSubMenu.bind(this);
    }

    componentWillMount() {
        this.getAdminMenus();
    }

    getAdminMenus() {
        axios.get(Routes.admin.path).then((response) => {
            this.setState({menu: response.data});
        });
    }

    renderMenu(response) {
        const listItems = [];

        response.forEach((item) => {

            listItems.push(
                <li key={item.id} ref={this.toggleRef}>

                    <NavLink key={item.id} to={item.path} onClick={this.toggle}  className='menu--close' activeClassName='menu--open'>
                        {item.icon && <i className={`${item.icon} list-fw`}/>}
                        {item.title}
                    </NavLink>

                    <ul className='sub-menu'>
                        {
                            item.children.map((child) => {
                                return this.createSidebarSubMenu(child);
                            })
                        }
                    </ul>
                </li>
            );
        });
        return listItems;
    }

    createSidebarSubMenu(child) {
        return (
            <li key={child.id}>
                <Link to={`${child.path}`}>{child.title}</Link>
            </li>
        )
    };

    toggle(e) {
        e.preventDefault();
        let elem = e.target;
        let sub = elem.parentElement.querySelectorAll('.sub-menu')[0];

        if (elem.classList.contains('menu--close') && this.state.checker) {
            this.state.checker = false;

            $.loop($.select('.sub-menu'), (item) => {
                let el = item.parentElement;
                el = $.select('.menu--open', el)[0];
                if (typeof el !== 'undefined') {
                    el.classList.remove('menu--open');
                    el.classList.add('menu--close');
                    $.slideUp(item);
                }
            });

            elem.classList.remove('menu--close');
            elem.classList.add('menu--open');

            $.slideDown(sub, () => {
                this.state.checker = true;
            });

        } else if (this.state.checker) {
            this.state.checker = false;

            elem.classList.remove('menu--open');
            elem.classList.add('menu--close');
            $.slideUp(sub, () => {
                this.state.checker = true;
            });
        }
    }

    render() {
        return (
            <ul className="sidebar">
                {this.renderMenu(this.state.menu)}
            </ul>
        );
    }
}