import { Link } from "react-router-dom";
import { TextEffect } from "./ui/text-effect";

interface NavItemProps {
    to: string;
    label: string;
    isActive: boolean;
    hidden?: boolean;
}

const NavItem = ({ to, label, isActive, hidden = false }: NavItemProps) => (
    <li hidden={hidden}>
        <Link to={to} className="w-full">
            <TextEffect
                variants={{
                    container: {
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    },
                    item: {
                        hidden: { opacity: 0, y: -15, filter: "blur(4px)" },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                                duration: 0.5,
                            },
                        },
                    },
                }}
                speedSegment={0.5}
                className={`w-full px-3 text-right hover:text-(--hover-color-light) dark:hover:text-(--hover-color-dark) ${
                    isActive ? "font-bold" : ""
                }`}
            >
                {label}
            </TextEffect>
        </Link>
    </li>
);

export default NavItem;
