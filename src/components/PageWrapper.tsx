import { ReactNode } from "react";
import { AnimatedGroup } from "./ui/animated-group";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <AnimatedGroup
            className="grid grid-cols-1 gap-2 pr-2"
            variants={{
                container: {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                },
                item: {
                    hidden: { opacity: 0, x: 15, filter: "blur(4px)" },
                    visible: {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        transition: {
                            duration: 0.5,
                        },
                    },
                },
            }}
            preset="slide"
        >
            {children}
        </AnimatedGroup>
    );
};

export default PageWrapper;
