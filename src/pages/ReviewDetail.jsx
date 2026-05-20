import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function ReviewDetail() {
    const { id } = useParams()
    const [review, setReview] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/reviews/${id}`)
            .then(res => setReview(res.data))
            .catch(err => console.error(err))
    }, [id])

    if (!review) return <div className="container mt-5">Loading...</div>

    return (
        <section className="section" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="container section-title">
                    <h2>Review Details</h2>
                    <p>Detailed view of client review</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div style={{
                            background: '#f8f9fa',
                            borderRadius: '12px',
                            padding: '40px',
                            borderTop: '3px solid #1a3a6b'
                        }}>
                            <div className="mb-3">
                                <strong style={{ color: '#1a3a6b' }}>Client:</strong>
                                <p>{review.clientName || 'Anonymous'}</p>
                            </div>
                            <div className="mb-3">
                                <strong style={{ color: '#1a3a6b' }}>Service:</strong>
                                <p>{review.serviceName || 'Gryphus Service'}</p>
                            </div>
                            <div className="mb-3">
                                <strong style={{ color: '#1a3a6b' }}>Rating:</strong>
                                <p>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill" style={{ color: '#ffc107' }}></i>
                                    ))}
                                </p>
                            </div>
                            <div className="mb-3">
                                <strong style={{ color: '#1a3a6b' }}>Review:</strong>
                                <p>{review.comment}</p>
                            </div>
                            <div className="mb-4">
                                <strong style={{ color: '#1a3a6b' }}>Date:</strong>
                                <p>{review.date}</p>
                            </div>
                            <Link to="/#reviews" style={{
                                background: '#1a3a6b',
                                color: 'white',
                                padding: '10px 24px',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>
                                ← Back to Reviews
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewDetail