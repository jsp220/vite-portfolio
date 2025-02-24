import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <section className="container mx-auto bg-orange-400">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default App;
