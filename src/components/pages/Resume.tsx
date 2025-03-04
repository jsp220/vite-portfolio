import ResumeFile from "/src/assets/resume/resume.pdf";

const Resume = () => {
    return (
        <>
            <h1 className="text-xl font-medium py-1">Resume</h1>
            <p className="pb-2">
                <a href={ResumeFile} target="_blank">
                    Click here for my resume.
                </a>
            </p>
        </>
    );
};

export default Resume;
