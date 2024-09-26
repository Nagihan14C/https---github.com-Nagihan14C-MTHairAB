import React from 'react';
import '../App.css'; // Ladda in anpassad CSS

export default function Behandlingar() {
    return (
        <div className="treatment-box">
            <div className="py-5">
                {/* Rubrik för behandlingar */}
                <h1 className="text-center mb-4">Våra behandlingar och priser</h1>

                {/* Behandlingsbox */}
                <div className="treatment-box">
                    {/* Klippning */}
                    <div className="mb-4">
                        <h3>Klippning</h3>
                        <ul className="list-unstyled">
                            <li>Klippning ........................................................................................ 250kr</li>
                            <li>Skinfade.........................................................................................  250kr</li>
                        </ul>
                    </div>

                    {/* Rakning */}
                    <div className="mb-4">
                        <h3>Rakning</h3>
                        <ul className="list-unstyled">
                            <li>Slätrakning med kniv ........................................................................... 200kr</li>
                        </ul>
                    </div>

                    {/* Styling */}
                    <div className="mb-4">
                        <h3>Styling</h3>
                        <ul className="list-unstyled">
                            <li>Tvätt & styling...............................................................................  200kr</li>
                        </ul>
                    </div>
                </div>
                
                {/* Centrera knappen med extra marginal */}
                <div className="text-center mt-5"> {/* Öka mt-4 till mt-5 för mer marginal */}
                    <a 
                        href="https://www.bokadirekt.se/places/mt-hair-46962" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transparent-button treatment-box"
                    >
                        BOKA TID ONLINE
                    </a>
                </div>
            </div>
        </div>
    );
}
