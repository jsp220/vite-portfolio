import { validateEmail } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isFormValid, setIsFormValid] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const allFieldsValid = Object.values(isFormValid).every(Boolean);
        setIsButtonDisabled(!allFieldsValid || loading);
    }, [formData, isFormValid, loading]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        // Get the value and name of the input
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
        setIsFormValid((prev) => ({ ...prev, [name]: true }));
    };

    const handleBlur = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setTouched((prev) => ({ ...prev, [name]: true }));
        if (!value) {
            setIsFormValid((prev) => ({ ...prev, [name]: false }));
        } else if (name === "email") {
            // Check if the email is valid
            setIsFormValid((prev) => ({
                ...prev,
                [name]: validateEmail(value),
            }));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(isFormValid).some((isValid) => !isValid)) {
            alert("Please fill out the form correctly.");
            return;
        }

        setLoading(true);
        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
        };

        emailjs
            .send(
                "service_74i9fmx",
                "template_p71o2bq",
                templateParams,
                "WNKsKHM2pWy83-JW-"
            )
            .then(
                (res: { text: string }) => {
                    console.log(res.text);
                    alert("Thank you for your message!");
                    setFormData({ name: "", email: "", message: "" });
                    setIsFormValid({
                        name: false,
                        email: false,
                        message: false,
                    });
                    setTouched({ name: false, email: false, message: false });
                    setLoading(false);
                    return;
                },
                (error: { text: string }) => {
                    console.error("Failed to send email. Error: ", error.text);
                    alert("That didn't work. Please try again.");
                    setLoading(false);
                    return;
                }
            );
    };

    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-medium py-1">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-1">
                    <label className="py-1" htmlFor="contact-name">
                        Name
                    </label>
                    <input
                        value={formData.name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        className="self-start bg-white dark:bg-gray-700 border-1 border-gray-400 rounded py-1 px-1.5 min-w-4xs max-w-2xs md:max-w-md field-sizing-content hover:border-hover-blue"
                        id="contact-name"
                        placeholder="Your Name"
                    />
                    <p
                        hidden={isFormValid.name || !touched.name}
                        className="text-red-700 dark:text-red-500 text-sm pt-0.5"
                    >
                        Please enter a name.
                    </p>
                </div>
                <div className="flex flex-col mb-1">
                    <label className="py-1" htmlFor="contact-email">
                        Email
                    </label>
                    <input
                        value={formData.email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        className="self-start bg-white border-1 border-gray-400 dark:bg-gray-700 rounded py-1 px-1.5 min-w-4xs max-w-2xs md:max-w-md field-sizing-content hover:border-hover-blue"
                        id="contact-email"
                        placeholder="Email"
                    />
                    <p
                        hidden={isFormValid.email || !touched.email}
                        className="text-red-700 dark:text-red-500 text-sm pt-0.5"
                    >
                        Please enter a valid email.
                    </p>
                </div>
                <div className="flex flex-col mb-1">
                    <label className="py-1" htmlFor="contact-message">
                        Message
                    </label>
                    <textarea
                        value={formData.message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="self-start bg-white border-1 border-gray-400 dark:bg-gray-700 rounded py-1 px-1.5 w-full min-h-40 md:max-w-md field-sizing-content hover:border-hover-blue"
                        id="contact-message"
                    />
                    <p
                        hidden={isFormValid.message || !touched.message}
                        className="text-red-700 dark:text-red-500 text-sm pt-0.5"
                    >
                        Please enter a message.
                    </p>
                </div>
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isButtonDisabled}
                        className="bg-white dark:bg-gray-700 h-auto rounded-[calc(8px)] border-1 border-transparent py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
