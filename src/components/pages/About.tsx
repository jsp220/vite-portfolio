import { AnimatedGroup } from "../ui/animated-group";

const About = () => (
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
        <img
            src="/src/assets/images/me.jpg"
            alt="picture of Joon Park"
            className="w-50 rounded"
        />
        <div>
            <h1 className="text-xl font-medium py-1">About me</h1>
            <p className="pb-2">
                Joon is a professional full stack engineer based in San Diego,
                CA. He has two years of industry experience building front end
                features in Angular/TypeScript and back end functionalities in
                Ktor/Kotlin. He delivered a Minimum Viable Product (MVP) of a
                clinical trial management web portal, achieving all OKRs and
                user stories. Prior to that, he completed his certificate for
                full stack web development at UC San Diego Extended Studies in
                November 2022.
            </p>
            <p className="pb-2">
                Joon also has 8+ years of engineering experience as a Process
                Engineer in the Biotech industry, solving problems such as
                optimizing yield and collaborating across departments such as
                Quality, Regulatory, and Research to meet challenging deadlines
                that the industry demands.
            </p>
            <p className="pb-2">
                Joon has developed various frontend, backend, and full stack
                applications, some of which can be found on the Portfolio page.
            </p>
        </div>
    </AnimatedGroup>
);

export default About;
