import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const HamburgerHelper = ({ onClick, menuIsOpen }) => (
    <div className={`Hamburger-helper${menuIsOpen ? "IsOpen" : ""}`}>
        <button onClick={onClick} type="button" />
        <span />
        <span />
        <span />
    </div>
);

class Menu extends PureComponent {
    state = {
        menuIsOpen: false,
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick);
    }

    handleClick = (e) => {
        if (this.node && !this.node.contains(e.target)) {
            this.setState({
                menuIsOpen: false,
            });
        }
    }

    toggleMenu = () => {
        const { menuIsOpen } = this.state;
        this.setState({
            menuIsOpen: !menuIsOpen,
        });
    }

    render() {
        const { menuIsOpen } = this.state;
        return (
            <div
                className="Menu"
            >
                {isMobile
                    ? <HamburgerHelper menuIsOpen={menuIsOpen} onClick={this.toggleMenu} />
                    : <button type="button" onClick={this.toggleMenu}>Menu</button>
                }
                {menuIsOpen && (
                    <ul
                        className="Dropdown-menu"
                        onClick={this.toggleMenu}
                        ref={node => this.node = node}
                    >
                        <li>Menu</li>
                        <li>
                            <Link to="">About the venue</Link>
                        </li>
                        <li>
                            <Link to="">Directions and parking</Link>
                        </li>
                        <li>
                            <Link to="">Hotels nearby</Link>
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}

export default Menu;
