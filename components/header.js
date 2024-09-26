import React from 'react';
import { NavMenu } from '../router/navmenu';
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom
import logo from '../img/MTHair.png'; // Justera sökvägen efter var din logotyp ligger

export default function Header() {
    return (
        <div className="container">
            <div className="d-flex align-items-center py-3">
                <Link to="/"> 
                    <img 
                        src={logo} 
                        alt="MT Hair AB Logo" 
                        style={{ width: '100px', height: 'auto', marginRight: '20px' }} 
                    />
                </Link>
                <NavMenu />
            </div>
        </div>
    );
}
