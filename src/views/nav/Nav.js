import React from "react";
import './Nav.scss'
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to='/' activeclassname='active' >Home</NavLink>
                    <NavLink to='/job' activeclassname='active' >Job</NavLink>
                    <NavLink to='/todo' activeclassname='active' >Todo</NavLink>
                    <NavLink to='/user' activeclassname='active' >User</NavLink>
                    <NavLink to='/flex' activeclassname='active' >Flex</NavLink>
                </div>
            </>
        )
    }
}
export default Nav