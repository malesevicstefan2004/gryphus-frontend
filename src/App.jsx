import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Register from './pages/Register'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
