import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const validateEmail = (email: string): boolean => {
    const emailRegex =
        /^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9._-]*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,12}$/;
    return emailRegex.test(email);
};

export { validateEmail };
