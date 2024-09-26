import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Se till att Bootstrap Icons CSS laddas in

export default function Footer() {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center py-3 my-4 border-top">
                {/* Sektion för barbershop beskrivning */}
                <div className="playfair-font mb-4 text-center">
                    I vår moderna och fräscha barbersalong erbjuder vi exklusiva behandlingar, 
                    inklusive klassisk rakning med kniv, 
                    ansiktsvaxning och vår populära svarta mask. 
                    Vi specialiserar oss också på skäggtrimning 
                    och stiliga hårklippningar. 
                    Besök vår barbershop på Linnégatan, 
                    där våra välutbildade och erfarna barberare står redo att ge dig den 
                    perfekta looken och känslan du önskar. 
                    <br/>
                    Varmt välkomna till oss på Linnégatan 31!
                </div>

                {/* Sektion för kontaktinformation */}
                <div className="d-flex justify-content-around w-100 mb-4">
                    {/* Telefonnummer */}
                    <div className="text-center bi bi-telephone">
                        <h5>Kontakt</h5>
                        <p>
                            <i className="" style={{ marginRight: '5px' }}></i>
                            073-685 91 31
                        </p>
                    </div>


                    {/* Öppettider */}
                    <div className="text-center bi bi-clock">
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
                    <div className="text-center bi bi-globe-asia-australia">
                        <h5>Adress</h5>
                        <p>
                            <i className="adress" style={{ marginRight: '5px' }}></i>
                            Linnégatan 31, 413 04 Göteborg
                        </p>
                    </div>
                </div>

                {/* Sektion för karta */}
                <div>
                    <p>
                        <a 
                            href="https://www.google.com/maps/place/Linnégatan+31,+413+04+Göteborg" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Se oss på kartan
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
