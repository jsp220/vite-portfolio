import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Projects, Resume } from "./components/pages/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isDarkMode;
};

const App = () => {
    const isDarkMode = useDarkMode();

    return (
        <div
            className={`flex flex-col w-xs xs:w-sm md:w-2xl ${
                isDarkMode ? "dark" : ""
            }`}
        >
            <Header />
            <main className="overflow-y-auto h-[calc(70vh)] md:h-[calc(85vh)]">
                <section className="w-full px-2 pt-1">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PageWrapper>
                                    <About />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <PageWrapper>
                                    <Projects />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <PageWrapper>
                                    <Contact />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/resume"
                            element={
                                <PageWrapper>
                                    <Resume />
                                </PageWrapper>
                            }
                        />
                    </Routes>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
