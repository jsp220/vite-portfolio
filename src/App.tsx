import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/pages/About'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <section className="container-fluid main-section">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App;
