import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Header = () => {
    const location = useLocation();
    const currentPage =
        location.pathname === "/" ? "home" : location.pathname.slice(1);

    return (
        <header className="w-sm md:w-2xl lg:w-3xl">
            <nav className="flex justify-between items-center">
                <Link to="/" className="ml-2 font-bold text-2xl text-nowrap">
                    Joon Park
                </Link>
                <ul className="flex flex-wrap justify-end ml-auto mt-0 text-right">
                    <NavItem
                        to="/"
                        label="Home"
                        isActive={currentPage === "home"}
                    />
                    <NavItem
                        to="/about"
                        label="About"
                        isActive={currentPage === "about"}
                    />
                    <NavItem
                        to="/portfolio"
                        label="Portfolio"
                        isActive={currentPage === "portfolio"}
                    />
                    <NavItem
                        to="/contact"
                        label="Contact"
                        isActive={currentPage === "contact"}
                    />
                    <NavItem
                        to="/resume"
                        label="Resume"
                        isActive={currentPage === "resume"}
                    />
                </ul>
            </nav>
        </header>
    );
};

export default Header;
