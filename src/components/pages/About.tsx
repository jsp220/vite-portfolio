import Me from "../../assets/images/me.jpg";

const About = () => {
    return (
        <div className="pt-1">
            <h1 className="pb-1">About Me</h1>
            <img src={Me} className="me-photo" alt="Joon Park" />
            <p>
                Joon Park is a professional full stack engineer based in San
                Diego, CA. He has two years of industry experience building
                front end features in Angular/TypeScript and back end
                functionalities in Ktor/Kotlin. He delivered a Minimum Viable
                Product (MVP) of a clinical trial management web portal,
                achieving all OKRs and user stories. Prior to that, he completed
                his certificate for full stack web development at UC San Diego
                Extended Studies in November 2022.
            </p>
            <p>
                He also has 8+ years of engineering experience as a Process
                Engineer in the Biotech industry, solving problems such as
                optimizing yield and collaborating across departments such as
                Quality, Regulatory, and Research to meet challenging deadlines
                that the industry demands.
            </p>
            <p>
                Joon has developed various frontend, backend, and full stack
                applications, some of which can be found on the Portfolio page.
            </p>
        </div>
    );
};

export default About;
