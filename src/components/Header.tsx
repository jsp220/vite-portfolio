import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentPage =
        location.pathname === "/" ? "home" : location.pathname.slice(1);

    return (
        <header>
            <nav className="navbar navbar-expand-lg justify-content-between">
                <div className="container-fluid">
                    <Link
                        to="/"
                        className="col-4 ms-2 fw-bolder navbar-brand full-name"
                    >
                        Joon Park
                    </Link>
                    <ul className="col-7 nav justify-content-end ms-auto mt-2 mt-lg-0 text-end">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    currentPage === "home"
                                        ? "nav-link fw-bolder"
                                        : "nav-link"
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={
                                    currentPage === "about"
                                        ? "nav-link fw-bolder"
                                        : "nav-link"
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={
                                    currentPage === "portfolio"
                                        ? "nav-link fw-bolder"
                                        : "nav-link"
                                }
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={
                                    currentPage === "contact"
                                        ? "nav-link fw-bolder"
                                        : "nav-link"
                                }
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/resume"
                                className={
                                    currentPage === "resume"
                                        ? "nav-link fw-bolder"
                                        : "nav-link"
                                }
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1 className="headline">Full Stack Engineer</h1>
        </header>
    );
};

export default Header;
