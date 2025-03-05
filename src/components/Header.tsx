import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Header = () => {
    const location = useLocation();
    const currentPage =
        location.pathname === "/" ? "about" : location.pathname.slice(1);

    return (
        <header className="pb-2 mb-2 border-b-1 border-gray-600">
            <nav className="flex justify-between items-end">
                <Link
                    to="/"
                    className="ml-2 font-bold text-xl md:text-2xl text-nowrap"
                >
                    Joon Park
                </Link>
                <ul className="flex flex-wrap justify-end ml-auto mt-0 text-right">
                    <NavItem
                        to="/"
                        label="About"
                        isActive={currentPage === "about"}
                    />
                    <NavItem
                        to="/projects"
                        label="Projects"
                        isActive={currentPage === "projects"}
                        hidden={true}
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
