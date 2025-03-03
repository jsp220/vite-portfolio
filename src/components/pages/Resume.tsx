import { Link } from "react-router-dom";
import ResumeFile from "../../assets/resume/resume.pdf";

const Resume = () => {
    return (
        <>
            <h1 className="text-xl font-medium py-1">Resume</h1>
            <p className="pb-2">
                <Link to={ResumeFile} target="_blank">
                    Click here for my resume.
                </Link>
            </p>
        </>
    );
};

export default Resume;
