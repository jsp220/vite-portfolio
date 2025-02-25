import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="flex flex-col w-sm h-[calc(100vh-3rem)] md:w-2xl lg:w-3xl">
            <Header />
            <main className="flex-grow overflow-y-auto">
                <section className="w-full px-2 pt-5">
                    <Routes>
                        <Route path="/" element={<About />} />
                    </Routes>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
