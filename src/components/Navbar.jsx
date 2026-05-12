import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [loginOpen, setLoginOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })
            const data = await response.json()
            if (data.token) {
                localStorage.setItem('token', data.token)
                setLoginOpen(false)
                alert('Login successful!')
            } else {
                alert('Invalid credentials')
            }
        } catch (error) {
            alert('Error connecting to server')
        }
    }

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                {/* Logo */}
                <Link to="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename" style={{fontFamily: 'Rajdhani, sans-serif', letterSpacing: '3px', fontWeight: '700'}}>GRYPHUS SOLUTIONS</h1>
                </Link>

                {/* Navigation */}
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
                        <li><a href="#about" style={{textDecoration: 'none'}}>About</a></li>
                        <li><Link to="/services" style={{textDecoration: 'none'}}>Services</Link></li>
                        <li><a href="#reviews" style={{textDecoration: 'none'}}>Reviews</a></li>
                        <li><a href="#news" style={{textDecoration: 'none'}}>News</a></li>

                        {/* Login Dropdown */}
                        <li className="dropdown">
                            <a href="#" onClick={(e) => { e.preventDefault(); setLoginOpen(!loginOpen) }}>
                                <span>Login</span>
                                <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            {loginOpen && (
                                <div style={{
                                    position: 'absolute',
                                    background: 'white',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    width: '280px',
                                    right: 0,
                                    zIndex: 9999
                                }}>
                                    <form onSubmit={handleLogin}>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Enter username"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <button type="submit" className="btn w-100" style={{ background: '#2979ff', color: 'white' }}>
                                            Login
                                        </button>
                                        <div className="mt-2 text-center">
                                            <small>
                                                No account? <Link
                                                to="/register"
                                                onClick={() => setLoginOpen(false)}
                                                style={{ color: '#2979ff', fontWeight: '500', textDecoration: 'underline' }}
                                            >
                                                Register here
                                            </Link>
                                            </small>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                {/* Contact button */}
                <a className="btn-getstarted" href="#contact">Contact Us</a>

            </div>
        </header>
    )
}

export default Navbar