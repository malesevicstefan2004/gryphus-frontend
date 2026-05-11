import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer" className="footer position-relative light-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <Link to="/" className="logo d-flex align-items-center">
                            <span className="sitename">Gryphus Solutions</span>
                        </Link>
                        <div className="footer-contact pt-3">
                            <p>Southeastern Europe Operations</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                            <p><strong>Email:</strong> <span>info@gryphus-solutions.com</span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#about">About Us</a></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#services">Close Protection</a></li>
                            <li><a href="#services">Risk Assessment</a></li>
                            <li><a href="#services">Asset Protection</a></li>
                            <li><a href="#services">Crisis Management</a></li>
                            <li><a href="#services">Intelligence Consulting</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-links">
                        <h4>About Gryphus</h4>
                        <p>Premier Risk Management Consulting company with extensive operational capabilities across the globe. Making your world safe since 2008.</p>
                    </div>
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Gryphus Solutions</strong> <span>All Rights Reserved</span></p>
            </div>
        </footer>
    )
}

export default Footer