import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Se till att Bootstrap Icons CSS laddas in
import '../App.css'; // Importera CSS-filen

export default function Kontakt() {
    return (
        <div className="container contact-container"> {/* Använd den nya klassen här */}
            <div className="d-flex flex-column align-items-center py-3 my-4">
                {/* Sektion för barbershop beskrivning */}
                <div className="playfair-font mb-4 text-center">
                    I vår moderna och fräscha barbersalong erbjuder vi exklusiva behandlingar, 
                    inklusive klassisk rakning med kniv, 
                    ansiktsvaxning och vår populära svarta mask. 
                    Vi specialiserar oss också på skäggtrimning 
                    och stiliga hårklippningar. 
                    Besök vår barbershop på Linnégatan 31, 
                    där våra välutbildade och erfarna barberare står redo att ge dig den 
                    perfekta looken och känslan du önskar. 
                    <br />
                    Varmt välkomna till oss på Linnégatan 31!
                </div>

                {/* Sektion för kontaktinformation */}
                <div className="row w-100 mb-4">
                    {/* Telefonnummer */}
                    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                        <h5>Kontakt</h5>
                        <p>
                            <i className="bi bi-telephone" style={{ marginRight: '5px' }}></i>
                            073-685 91 31
                        </p>
                    </div>

                    {/* Öppettider */}
                    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                        <h5>Öppettider</h5>
                        <p>Måndag: 10.00 - 18.30</p>
                        <p>Tisdag: 10.00 - 18.30</p>
                        <p>Onsdag: 10.00 - 18.30</p>
                        <p>Torsdag: 10.00 - 18.30</p>
                        <p>Fredag: 10.00 - 18.30</p>
                        <p>Lördag: 10:00 - 16:30</p>
                        <p>Söndag: 11:00 - 17:00</p>
                    </div>

                    {/* Adress */}
                    <div className="col-12 col-md-4 text-center">
                        <h5>Adress</h5>
                        <a 
                            href="https://www.google.com/maps/place/Linn%C3%A9gatan+31,+413+04+G%C3%B6teborg" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Linnégatan 31, 413 04 Göteborg
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
