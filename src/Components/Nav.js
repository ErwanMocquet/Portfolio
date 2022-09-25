import {NavLink} from "react-router-dom";
export default function Navigation() {
    return(
        <nav className="navigation">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About me</NavLink>
            <NavLink to="/projects">My projects</NavLink>
            <NavLink to="/contact">Contacts</NavLink>
        </nav>
    );
}

