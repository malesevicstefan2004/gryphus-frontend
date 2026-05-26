import { useState, useEffect } from 'react'
import axios from 'axios'
import API_URL from '../api'

function AddReviewForm({ onReviewAdded }) {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(5)
    const [message, setMessage] = useState('')
    const [services, setServices] = useState([])
    const [securityServiceId, setSecurityServiceId] = useState('')

    useEffect(() => {
        axios.get(`${API_URL}/api/services`)
            .then(res => setServices(res.data))
            .catch(() => {})
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        if (!token) {
            setMessage('Please login first to leave a review.')
            return
        }
        const body = { comment, rating }
        if (securityServiceId) body.securityServiceId = Number(securityServiceId)

        try {
            await axios.post(`${API_URL}/api/reviews`, body, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setMessage('Review submitted successfully!')
            setComment('')
            setRating(5)
            setSecurityServiceId('')
            onReviewAdded()
        } catch {
            setMessage('Error submitting review. Please try again.')
        }
    }

    return (
        <div className="row justify-content-center mt-2">
            <div className="col-lg-8">
                <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '40px', borderTop: '3px solid #1a3a6b' }}>
                    <form onSubmit={handleSubmit}>
                        {/* Rating */}
                        <div className="mb-4">
                            <label style={{ color: '#2979ff', fontWeight: '500', marginBottom: '8px', display: 'block' }}>Rating</label>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button key={num} type="button" onClick={() => setRating(num)} style={{
                                        width: '42px', height: '42px', borderRadius: '4px',
                                        border: `2px solid ${rating >= num ? '#2979ff' : '#dee2e6'}`,
                                        background: rating >= num ? '#2979ff' : 'white',
                                        color: rating >= num ? 'white' : '#2979ff',
                                        fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s'
                                    }}>{num}</button>
                                ))}
                                <span style={{ color: '#6c757d', alignSelf: 'center', marginLeft: '8px', fontSize: '14px' }}>
                                    {rating === 5 ? 'Excellent' : rating === 4 ? 'Very Good' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor'}
                                </span>
                            </div>
                        </div>

                        {/* Service selection */}
                        {services.length > 0 && (
                            <div className="mb-4">
                                <label style={{ color: '#2979ff', fontWeight: '500', marginBottom: '8px', display: 'block' }}>
                                    Service (optional)
                                </label>
                                <select
                                    className="form-control"
                                    value={securityServiceId}
                                    onChange={e => setSecurityServiceId(e.target.value)}
                                    style={{ borderColor: '#dee2e6' }}
                                >
                                    <option value="">— Select a service —</option>
                                    {services.map(s => (
                                        <option key={s.id} value={s.id}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Comment */}
                        <div className="mb-4">
                            <label style={{ color: '#2979ff', fontWeight: '500', marginBottom: '8px', display: 'block' }}>Your Review</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                placeholder="Share your experience with Gryphus Solutions..."
                                required
                                style={{ borderColor: '#dee2e6', resize: 'none' }}
                            />
                        </div>

                        {message && (
                            <div style={{
                                padding: '12px', borderRadius: '6px', marginBottom: '16px',
                                background: message.includes('success') ? '#e8f5e9' : '#ffebee',
                                color: message.includes('success') ? '#2e7d32' : '#c62828',
                                fontSize: '14px'
                            }}>{message}</div>
                        )}

                        <button type="submit" style={{
                            background: '#2979ff', color: 'white', border: 'none',
                            padding: '12px 32px', borderRadius: '6px', fontWeight: '600',
                            letterSpacing: '1px', cursor: 'pointer', width: '100%'
                        }}>SUBMIT REVIEW</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddReviewForm
