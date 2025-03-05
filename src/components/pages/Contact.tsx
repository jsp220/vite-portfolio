import React, { useState } from "react";

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

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        // Get the value and name of the input
        const { name, value } = e.target;

        switch (name) {
            case InputName.Name:
                setName(value);
                if (value) setIsNameInvalid(false);
                break;
            case InputName.Email:
                setEmail(value);
                if (value) setIsEmailInvalid(false);
                break;
            case InputName.Message:
                setMessage(value);
                if (value) setIsMessageInvalid(false);
                break;
        }
    };

    const handleBlur = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        switch (name) {
            case InputName.Email: {
                const isValidEmail = email.match(
                    /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,12}$/
                );
                if (!isValidEmail) setIsEmailInvalid(true);
                else setIsEmailInvalid(false);
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

    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-medium py-1">Contact me</h1>
            <form id="contact-form">
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
                        onClick={(event) => console.log(event)}
                        className="bg-white dark:bg-gray-700 h-auto rounded-[calc(8px)] border-1 border-transparent py-1 px-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
