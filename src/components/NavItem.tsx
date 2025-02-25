import { Link } from "react-router-dom";

interface NavItemProps {
    to: string;
    label: string;
    isActive: boolean;
}

const NavItem = ({ to, label, isActive }: NavItemProps) => (
    <li className="text-right">
        <Link
            to={to}
            className={`px-3 py-2 hover:text-(--hover-color-light) dark:hover:text-(--hover-color-dark) ${
                isActive ? "font-bold" : ""
            }`}
        >
            {label}
        </Link>
    </li>
);

export default NavItem;
