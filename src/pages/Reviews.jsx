import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddReviewForm({ onReviewAdded }) {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(5)
    const [message, setMessage] = useState('')
    const [services, setServices] = useState([])
    const [securityServiceId, setSecurityServiceId] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/services')
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
            await axios.post('http://localhost:8080/api/reviews', body, {
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

function Reviews() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filterRating, setFilterRating] = useState(0)

    const fetchReviews = () => {
        setLoading(true)
        axios.get('http://localhost:8080/api/reviews')
            .then(res => setReviews(res.data))
            .catch(() => setError('Failed to load reviews. Please try again later.'))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    const filtered = filterRating === 0
        ? reviews
        : reviews.filter(r => r.rating === filterRating)

    return (
        <section className="section" style={{ minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container">

                {/* Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Client Reviews</h2>
                    <p>What our clients say about Gryphus Solutions</p>
                </div>

                {/* Filter bar */}
                <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap" data-aos="fade-up">
                    {[0, 5, 4, 3, 2, 1].map(num => (
                        <button
                            key={num}
                            onClick={() => setFilterRating(num)}
                            style={{
                                padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '14px',
                                border: `2px solid ${filterRating === num ? '#1a3a6b' : '#dee2e6'}`,
                                background: filterRating === num ? '#1a3a6b' : 'white',
                                color: filterRating === num ? 'white' : '#1a3a6b',
                                transition: 'all 0.2s'
                            }}
                        >
                            {num === 0 ? 'All' : `${'★'.repeat(num)} (${num})`}
                        </button>
                    ))}
                </div>

                {/* States */}
                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger text-center">{error}</div>
                )}

                {/* Reviews grid */}
                {!loading && !error && (
                    <>
                        {filtered.length === 0 ? (
                            <div className="text-center py-5" style={{ color: '#6c757d' }}>
                                No reviews found for this rating.
                            </div>
                        ) : (
                            <div className="row g-4">
                                {filtered.map((review, index) => (
                                    <div className="col-lg-6" key={review.id} data-aos="fade-up" data-aos-delay={100 * (index % 4 + 1)}>
                                        <div className="testimonial-item">
                                            <div className="stars">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <i key={i} className="bi bi-star-fill"></i>
                                                ))}
                                                {[...Array(5 - review.rating)].map((_, i) => (
                                                    <i key={i} className="bi bi-star" style={{ opacity: 0.3 }}></i>
                                                ))}
                                            </div>
                                            <p>{review.comment}</p>
                                            <div className="testimonial-footer">
                                                <div className="testimonial-author">
                                                    <div>
                                                        <h5>{review.clientName || 'Anonymous'}</h5>
                                                        <span>{review.serviceName || 'Gryphus Client'}</span>
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: 'right' }}>
                                                    <small style={{ color: '#aaa', fontSize: '12px', display: 'block' }}>{review.date}</small>
                                                    <Link to={`/reviews/${review.id}`} style={{ color: '#1a3a6b', fontSize: '13px' }}>
                                                        View Details →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Add Review section */}
                        <div className="mt-5 pt-4" style={{ borderTop: '1px solid #dee2e6' }}>
                            <div className="container section-title">
                                <h2>Submit a Review</h2>
                                <p>Share your experience with Gryphus Solutions</p>
                            </div>
                            <AddReviewForm onReviewAdded={fetchReviews} />
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Reviews
