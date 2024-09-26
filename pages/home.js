import React from 'react';
// Importera din bild här
import logo from '../img/MTH.jpg'; // Byt ut denna sökväg till din bild

export default function Home() {
  return (
    <div className="container py-4" id="home">
      <div className="text-center mb-4">
        <img 
          src={logo} 
          alt="MT Hair AB Logo" // Skriv en beskrivning av bilden för tillgänglighet
          className="img-fluid responsive-logo" // Gör bilden responsiv
        />
      </div>
      <div className="bg-body-tertiary p-5 rounded centered-content">
        <div className="col-sm-8 py-5 mx-auto">
          <h1 className="display-5 fw-normal custom-font">Välkommen till MT Hair</h1>
          <p className="fs-5 custom-font">
            <br />
            I vår moderna och fräscha barbersalong erbjuder vi exklusiva behandlingar, 
            inklusive klassisk rakning med kniv, ansiktsvaxning och vår populära svarta mask. 
            Vi specialiserar oss också på skäggtrimning och stiliga hårklippningar. 
            Besök vår barbershop på Linnégatan 31, 
            där våra välutbildade och erfarna barberare står redo att ge dig den perfekta looken och känslan du önskar. 
            <br />
            <br />
            Vi ser fram emot att välkomna dig!
          </p>

          <a 
            href="https://www.bokadirekt.se/places/mt-hair-46962" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transparent-button mt-3" 
          >
            BOKA TID ONLINE
          </a>
        </div>
      </div>
    </div>
  );
}
