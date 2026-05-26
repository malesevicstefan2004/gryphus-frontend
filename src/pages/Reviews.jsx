import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import API_URL from '../api'
import AddReviewForm from '../components/AddReviewForm'

function Reviews() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filterRating, setFilterRating] = useState(0)

    const fetchReviews = () => {
        setLoading(true)
        axios.get(`${API_URL}/api/reviews`)
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
