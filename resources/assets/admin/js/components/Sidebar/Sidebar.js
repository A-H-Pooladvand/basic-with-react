import React, {Component} from 'react';
import SidebarListItems from '../../data/sidebar/sidebar_menu_items.json';
import $ from "../../helpers/jquery";

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.toggleRef = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.checker = true;
    }

    componentDidMount() {
        $.loop($.select('.sidebar > li > a'), (item) => {
            item.classList.add('menu--close');
        });
    }


    createSidebarMenu() {

        const listItems = [];

        SidebarListItems.data.forEach((item) => {
            listItems.push(
                <li key={item.id} ref={this.toggleRef}>
                    <a key={item.id} href="#" onClick={this.toggle}>
                        {item.icon && <i className={`fas fa-${item.icon} list-fw`}/>}
                        {item.title}
                    </a>
                    <ul className={item.children[0].className}>
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
                <a href="#">{child.title}</a>
            </li>
        )
    };

    toggle(e) {
        e.preventDefault();
        let elem = e.target;
        let sub = elem.parentElement.querySelectorAll('.sub-menu')[0];

        if (elem.classList.contains('menu--close') && this.checker) {
            this.checker = false;

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
                this.checker = true;
            });

        } else if (this.checker) {
            this.checker = false;

            elem.classList.remove('menu--open');
            elem.classList.add('menu--close');
            $.slideUp(sub, () => {
                this.checker = true;
            });
        }
    }

    render() {
        return (
            <ul className="sidebar">
                {this.createSidebarMenu()}
            </ul>
        );
    }
}