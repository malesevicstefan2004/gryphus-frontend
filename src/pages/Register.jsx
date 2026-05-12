import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirm) {
            setMessage('Passwords do not match.')
            return
        }
        try {
            await axios.post('http://localhost:8080/api/auth/register', { username, password })
            setSuccess(true)
            setMessage('Account created successfully! Redirecting to home...')
            setTimeout(() => navigate('/'), 2000)
        } catch (error) {
            setMessage('Username already exists. Please choose another.')
        }
    }

    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">

                        <div className="container section-title" data-aos="fade-up">
                            <h2>Create Account</h2>
                            <p>Register to leave reviews and access client features</p>
                        </div>

                        <div style={{
                            background: '#f8f9fa',
                            borderRadius: '12px',
                            padding: '40px',
                            borderTop: '3px solid #1a3a6b'
                        }}>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label style={{ color: '#2979ff', fontWeight: '500', marginBottom: '8px', display: 'block' }}>
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Choose a username"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label style={{ color: '#2979ff', fontWeight: '500', marginBottom: '8px', display: 'block' }}>
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Choose a password"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label style={{ color: '#2979ff', fontWeight: '500', marginBottom: '8px', display: 'block' }}>
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                        placeholder="Repeat your password"
                                        required
                                    />
                                </div>

                                {message && (
                                    <div style={{
                                        padding: '12px',
                                        borderRadius: '6px',
                                        marginBottom: '16px',
                                        background: success ? '#e8f5e9' : '#ffebee',
                                        color: success ? '#2e7d32' : '#c62828',
                                        fontSize: '14px'
                                    }}>
                                        {message}
                                    </div>
                                )}

                                <button type="submit" style={{
                                    background: '#2979ff',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 32px',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    cursor: 'pointer',
                                    width: '100%'
                                }}>
                                    CREATE ACCOUNT
                                </button>

                                <div className="text-center mt-3">
                                    <small style={{ color: '#6c757d' }}>
                                        Already have an account?{' '}
                                        <span
                                            onClick={() => document.querySelector('.navmenu .dropdown > a').click()}
                                            style={{ color: '#2979ff', cursor: 'pointer', textDecoration: 'underline' }}
                                        >
                      Login here
                    </span>
                                    </small>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register