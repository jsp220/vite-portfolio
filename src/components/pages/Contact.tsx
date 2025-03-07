import { validateEmail } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

enum InputName {
    Name = "name",
    Email = "email",
    Message = "message",
}

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isMessageInvalid, setIsMessageInvalid] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(!name || !email || !message || isEmailInvalid);
    }, [name, email, message, isEmailInvalid]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        // Get the value and name of the input
        const { name, value } = e.target;

        switch (name) {
            case InputName.Name:
                setName(value);
                setIsNameInvalid(!value);
                break;
            case InputName.Email:
                setEmail(value);
                setIsEmailInvalid(!validateEmail(value));
                break;
            case InputName.Message:
                setMessage(value);
                setIsMessageInvalid(!value);
                break;
        }
    };

    const handleBlur = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        switch (name) {
            case InputName.Email: {
                setIsEmailInvalid(!validateEmail(value));
                break;
            }
            case InputName.Name:
                if (!value) setIsNameInvalid(true);
                else setIsNameInvalid(false);
                break;
            case InputName.Message:
                if (!value) setIsMessageInvalid(true);
                else setIsMessageInvalid(false);
                break;
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isNameInvalid || isEmailInvalid || isMessageInvalid) {
            alert("Please fill out the form correctly.");
        }

        const templateParams = {
            from_name: name,
            reply_to: email,
            message: message,
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
                    setName("");
                    setEmail("");
                    setMessage("");
                    return;
                },
                (error: { text: string }) => {
                    console.error("Failed to send email. Error: ", error.text);
                    alert("That didn't work. Please try again.");
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
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        className="self-start bg-white dark:bg-gray-700 border-1 border-gray-400 rounded py-1 px-1.5 min-w-4xs max-w-2xs md:max-w-md field-sizing-content hover:border-hover-blue"
                        id="contact-name"
                        placeholder="Your Name"
                    />
                    <p
                        hidden={!isNameInvalid}
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
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        className="self-start bg-white border-1 border-gray-400 dark:bg-gray-700 rounded py-1 px-1.5 min-w-4xs max-w-2xs md:max-w-md field-sizing-content hover:border-hover-blue"
                        id="contact-email"
                        placeholder="Email"
                    />
                    <p
                        hidden={!isEmailInvalid}
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
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="self-start bg-white border-1 border-gray-400 dark:bg-gray-700 rounded py-1 px-1.5 w-full min-h-40 md:max-w-md field-sizing-content hover:border-hover-blue"
                        id="contact-message"
                    />
                    <p
                        hidden={!isMessageInvalid}
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
