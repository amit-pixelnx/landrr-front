import React, { Component } from 'react'
import Link from 'next/link'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      navbarOpen: false 
    };

  }
  handleToggle = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    })
  }

  render() {
    return (
      <>
          <button className="menuToogle" onClick={this.handleToggle}>{this.state.navbarOpen ? <MdClose /> : <FiMenu />}</button>
          <div className={`${this.state.navbarOpen ? "menuOverlay" : ""}`}></div>
          <ul className={`menu ${this.state.navbarOpen ? "showMenu" : ""}`}>
            <li onClick={this.handleToggle}>
              <Link href="/" >
                <a>Services</a>
              </Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
      </>
  );
  }
}

export default Navbar;