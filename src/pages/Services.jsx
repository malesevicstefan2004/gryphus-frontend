import { useState, useEffect } from 'react'
import axios from 'axios'

function Services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8080/api/services')
            .then(res => setServices(res.data))
            .catch(() => setError('Failed to load services. Please try again later.'))
            .finally(() => setLoading(false))
    }, [])

    const icons = [
        'bi-shield-check',
        'bi-globe',
        'bi-people-fill',
        'bi-graph-up-arrow',
        'bi-eye',
        'bi-lightning-charge',
        'bi-briefcase',
        'bi-building',
    ]

    return (
        <section className="section" style={{ minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container">

                {/* Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Our Services</h2>
                    <p>Comprehensive security and risk management solutions tailored to your needs</p>
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

                {/* Services grid */}
                {!loading && !error && (
                    <>
                        {services.length === 0 ? (
                            <div className="text-center py-5" style={{ color: '#6c757d' }}>
                                No services available at the moment.
                            </div>
                        ) : (
                            <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                                {services.map((service, index) => (
                                    <div className="col-md-6 col-lg-4" key={service.id} data-aos="fade-up" data-aos-delay={100 * (index % 3 + 1)}>
                                        <div className="service-card" style={{ height: '100%' }}>
                                            <div className="service-content text-center">
                                                <div className="service-icon">
                                                    <i className={`bi ${icons[index % icons.length]}`}></i>
                                                </div>
                                                <div className="service-info">
                                                    <h3>{service.name}</h3>
                                                    <p>{service.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CTA */}
                        <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid #dee2e6' }}>
                            <h4 style={{ color: '#1a3a6b', marginBottom: '12px' }}>Need a custom solution?</h4>
                            <p style={{ color: '#6c757d', marginBottom: '24px' }}>
                                Our experts are ready to tailor a security strategy for your specific situation.
                            </p>
                            <a href="/#contact" className="btn btn-primary">Contact Us</a>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Services
