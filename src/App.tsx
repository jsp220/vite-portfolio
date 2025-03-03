import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Projects, Resume } from "./components/pages/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

const App = () => {
    return (
        <div className="flex flex-col w-sm h-[calc(100vh-3rem)] md:w-2xl lg:w-3xl">
            <Header />
            <main className="flex-grow overflow-y-auto">
                <section className="w-full px-2 pt-5">
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
