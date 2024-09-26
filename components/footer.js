import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Se till att Bootstrap Icons CSS laddas in

export default function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            </footer>
            <div className="py-3 text-center">
            <br/>
            <h1 className="playfair-font">VI HAR DROP IN & TIDSBOKNING!</h1> {/* Använd Playfair Display här */}
            <br/>
            <h5>ÖPPETTIDER</h5>
            <p>Måndag - Fredag: 10:00 - 18:30</p>
                <p>Lördag: 10:00 - 16:30</p>
                <p>Söndag: 11:00 - 17:00</p>

                <br/>
                <h5>KONTAKTINFORMATION</h5>

                <p>
    <i className="bi bi-globe-asia-australia" style={{ marginRight: '5px' }}></i>
    <a 
        href="https://www.google.com/maps/place/Linn%C3%A9gatan+31,+413+04+G%C3%B6teborg" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }} // För att behålla stil
    >
        Linnégatan 31, 413 04 Göteborg
    </a>
</p>

                <div className="d-flex flex-column align-items-center">
                  
                    <p>
                        <i className="bi bi-envelope" style={{ marginRight: '5px' }}></i>
                        mthairab@hotmail.com
                    </p>
                    <p>
                        <i className="bi bi-telephone" style={{ marginRight: '5px' }}></i>
                        073-685 91 31
                    </p>
                   
                </div>

                {/* Sociala medier länkar */}
                <div className="d-flex justify-content-center">
                    <a href="https://www.bokadirekt.se/places/mt-hair-46962" target="_blank" rel="noopener noreferrer" className="me-3 text-body-secondary">
                        <i className="bi bi-calendar-week" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="https://www.instagram.com/mthair_salong/" target="_blank" rel="noopener noreferrer" className="me-3 text-body-secondary">
                        <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
                
            </div>
            <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; Alla rättigheter förbehållna 2024 MT Hair AB</span>
                </div>
        </div>
    );
}
