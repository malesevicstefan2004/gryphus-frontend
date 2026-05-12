import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [reviews, setReviews] = useState([])
    const [services, setServices] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/reviews').then(res => setReviews(res.data))
        axios.get('http://localhost:8080/api/services').then(res => setServices(res.data))
        axios.get('http://localhost:8080/api/news').then(res => setNews(res.data))
    }, [])

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="hero section dark-background">
                <div className="container" data-aos="fade-up">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
                                <div className="hero-tag">
                                    <i className="bi bi-shield-check"></i>
                                    <span>Professional Security Solutions</span>
                                </div>
                                <h1>Making Your <span className="highlight">World</span> Safe</h1>
                                <p className="lead">
                                    Gryphus Solutions is a premier Risk Management Consulting company
                                    with extensive operational capabilities across Southeastern Europe,
                                    South America, Iraq, Afghanistan, and West Africa.
                                </p>
                                <ul className="hero-features">
                                    <li><i className="bi bi-check-circle"></i> Security & Intelligence Consulting</li>
                                    <li><i className="bi bi-check-circle"></i> Emergency & Disaster Management</li>
                                    <li><i className="bi bi-check-circle"></i> Critical Operational Support</li>
                                </ul>
                                <div className="hero-cta">
                                    <a href="#services" className="btn btn-primary">Explore Our Services</a>
                                    <a href="#contact" className="btn btn-link">
                                        <i className="bi bi-telephone"></i> Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay="300">
                                <img src="/assets/img/about/about-square-13.webp" alt="Gryphus Solutions" className="img-fluid hero-image" />
                                <div className="stat-card top-right">
                                    <div className="stat-value">15+</div>
                                    <div className="stat-label">Years of Experience</div>
                                    <div className="stat-icon"><i className="bi bi-graph-up-arrow"></i></div>
                                </div>
                                <div className="stat-card bottom-left">
                                    <div className="stat-value">50+</div>
                                    <div className="stat-label">Global Operations</div>
                                    <div className="stat-icon"><i className="bi bi-globe"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="section-heading">Our Vision & Mission</h2>
                            <p className="lead">
                                We provide comprehensive risk management and security consulting solutions
                                for governmental entities and the private sector worldwide.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="feature-box">
                                <div className="icon-container"><i className="bi bi-shield-check"></i></div>
                                <h4>Security</h4>
                                <p>Providing the highest standards of security consulting tailored to each client's specific needs.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-box">
                                <div className="icon-container"><i className="bi bi-globe"></i></div>
                                <h4>Global Reach</h4>
                                <p>Extensive operational capabilities across Southeastern Europe, South America, Iraq, Afghanistan, and West Africa.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="feature-box">
                                <div className="icon-container"><i className="bi bi-people-fill"></i></div>
                                <h4>Expert Team</h4>
                                <p>Renowned specialists with extensive experience in demanding and hostile environments.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="feature-box">
                                <div className="icon-container"><i className="bi bi-people"></i></div>
                                <h4>Partnership</h4>
                                <p>Working alongside our clients to develop enduring and long-standing business partnerships.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center about-showcase">
                        <div className="col-lg-6 order-lg-2" data-aos="fade-left" data-aos-delay="300">
                            <div className="about-image-grid">
                                <img src="/assets/img/about/about-15.webp" className="img-grid-main" alt="Gryphus Operations" />
                                <img src="/assets/img/about/about-17.webp" className="img-grid-secondary" alt="Our Team" />
                                <img src="/assets/img/about/about-square-5.webp" className="img-grid-tertiary" alt="Our Workspace" />
                                <div className="experience-badge" data-aos="zoom-in" data-aos-delay="500">
                                    <span className="years">15+</span>
                                    <span className="text">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-delay="200">
                            <div className="about-content-box">
                                <h3>Premier Risk Management Since 2008</h3>
                                <p className="mb-4">
                                    Gryphus Solutions excels in environments where insurgency, terrorism,
                                    significant criminal threats, and natural or manmade disasters present
                                    current or potential dangers. Our approach emphasizes maximizing benefits
                                    while mitigating risks identified during thorough research and analysis.
                                </p>
                                <div className="progress-item">
                                    <div className="d-flex justify-content-between">
                                        <span className="progress-title">Security Risk Mitigation</span>
                                        <span className="progress-percent">96%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '96%'}}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="d-flex justify-content-between">
                                        <span className="progress-title">Crisis Management</span>
                                        <span className="progress-percent">92%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="d-flex justify-content-between">
                                        <span className="progress-title">Intelligence Consulting</span>
                                        <span className="progress-percent">89%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '89%'}}></div>
                                    </div>
                                </div>
                                <a href="#services" className="btn btn-discover mt-4">Learn More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="stats section light-background">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="stats-overview text-center text-lg-start" data-aos="fade-right" data-aos-delay="200">
                                <h3>Our growth in numbers</h3>
                                <p>Over 15 years of delivering exceptional security and risk management solutions to clients across the globe.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="stats-grid" data-aos="zoom-in" data-aos-delay="300">
                                <div className="stats-card">
                                    <div className="stats-icon"><i className="bi bi-people-fill"></i></div>
                                    <div className="stats-content">
                                        <div className="stats-number">200<span className="plus">+</span></div>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                <div className="stats-card">
                                    <div className="stats-icon"><i className="bi bi-folder2-open"></i></div>
                                    <div className="stats-content">
                                        <div className="stats-number">450<span className="plus">+</span></div>
                                        <p>Completed Operations</p>
                                    </div>
                                </div>
                                <div className="stats-card">
                                    <div className="stats-icon"><i className="bi bi-globe"></i></div>
                                    <div className="stats-content">
                                        <div className="stats-number">30<span className="plus">+</span></div>
                                        <p>Countries Covered</p>
                                    </div>
                                </div>
                                <div className="stats-card">
                                    <div className="stats-icon"><i className="bi bi-person-workspace"></i></div>
                                    <div className="stats-content">
                                        <div className="stats-number">50<span className="plus">+</span></div>
                                        <p>Expert Consultants</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Our Services</h2>
                    <p>Comprehensive security and risk management solutions tailored to your needs</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="services-row">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="services-headline" data-aos="fade-up">
                                    <p className="services-subtitle">Expert Guidance</p>
                                    <h2 className="services-title">Professional Security Solutions We Provide</h2>
                                </div>
                                <div className="services-description" data-aos="fade-up" data-aos-delay="100">
                                    <p>Our team of specialists delivers cutting-edge security strategies to protect you and your assets in any environment.</p>
                                </div>
                                <div className="services-image-container" data-aos="fade-up" data-aos-delay="200">
                                    <div className="services-image">
                                        <img src="/assets/img/services/services-12.webp" alt="Services" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="services-grid">
                                    <div className="row gy-4">
                                        {services.length > 0 ? services.map((service, index) => (
                                            <div className="col-md-6" key={service.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                                <div className="service-card">
                                                    <div className="service-content text-center">
                                                        <div className="service-icon">
                                                            <i className="bi bi-shield-check"></i>
                                                        </div>
                                                        <div className="service-info">
                                                            <h3>{service.name}</h3>
                                                            <p>{service.description}</p>
                                                            <div className="service-action">
                                                                <Link to="/services" className="read-more-btn">
                                                                    Details <i className="bi bi-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : (
                                            <div className="col-12 text-center">
                                                <p>Loading services...</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="testimonials section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Client Reviews</h2>
                    <p>What our clients say about our services</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row g-4">
                        {reviews.map((review, index) => (
                            <div className="col-lg-6" key={review.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                <div className="testimonial-item">
                                    <div className="stars">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <i key={i} className="bi bi-star-fill"></i>
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
                                        <div className="quote-icon">
                                            <i className="bi bi-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Review Button */}
                    <div className="text-center mt-5">
                        <a href="#add-review" className="btn btn-primary">Leave a Review</a>
                    </div>

                    {/* Add Review Form */}
                    <div id="add-review" className="mt-5" data-aos="fade-up">
                        <h3 className="text-center mb-4">Share Your Experience</h3>
                        <AddReviewForm onReviewAdded={() => axios.get('http://localhost:8080/api/reviews').then(res => setReviews(res.data))} />
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section id="news" className="services section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Security News</h2>
                    <p>Latest security updates from around the world</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        {news.slice(0, 6).map((article, index) => (
                            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                <div className="service-card">
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="bi bi-newspaper"></i>
                                        </div>
                                        <div className="service-info">
                                            <h3>{article.title?.substring(0, 60)}...</h3>
                                            <p>{article.description?.substring(0, 100)}...</p>
                                            <div className="service-action">
                                                <a href={article.url} target="_blank" rel="noreferrer" className="read-more-btn">
                                                    Read More <i className="bi bi-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Get in touch with our security experts</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="contact-main-wrapper">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title="Gryphus Location">
                            </iframe>
                        </div>
                        <div className="contact-content">
                            <div className="contact-cards-container" data-aos="fade-up" data-aos-delay="300">
                                <div className="contact-card">
                                    <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
                                    <div className="contact-text">
                                        <h4>Location</h4>
                                        <p>Southeastern Europe Operations</p>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <div className="icon-box"><i className="bi bi-envelope"></i></div>
                                    <div className="contact-text">
                                        <h4>Email</h4>
                                        <p>info@gryphus-solutions.com</p>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <div className="icon-box"><i className="bi bi-telephone"></i></div>
                                    <div className="contact-text">
                                        <h4>Call</h4>
                                        <p>+1 (212) 555-7890</p>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <div className="icon-box"><i className="bi bi-clock"></i></div>
                                    <div className="contact-text">
                                        <h4>Open Hours</h4>
                                        <p>24/7 Emergency Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-container" data-aos="fade-up" data-aos-delay="400">
                                <h3>Get in Touch</h3>
                                <p>Contact our security experts for a confidential consultation.</p>
                                <form className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="form-submit mt-3">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// Add Review Form Component
function AddReviewForm({ onReviewAdded }) {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(5)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        if (!token) {
            setMessage('Please login first to leave a review.')
            return
        }
        try {
            await axios.post('http://localhost:8080/api/reviews',
                { comment, rating },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setMessage('Review submitted successfully!')
            setComment('')
            setRating(5)
            onReviewAdded()
        } catch (error) {
            setMessage('Error submitting review. Please try again.')
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Rating</label>
                        <select className="form-control" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                            <option value={5}>⭐⭐⭐⭐⭐ - Excellent</option>
                            <option value={4}>⭐⭐⭐⭐ - Very Good</option>
                            <option value={3}>⭐⭐⭐ - Good</option>
                            <option value={2}>⭐⭐ - Fair</option>
                            <option value={1}>⭐ - Poor</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label>Your Review</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Share your experience with Gryphus Solutions..."
                            required
                        ></textarea>
                    </div>
                    {message && <div className="alert alert-info">{message}</div>}
                    <button type="submit" className="btn btn-primary w-100">Submit Review</button>
                </form>
            </div>
        </div>
    )
}

export default Home