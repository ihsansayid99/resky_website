import React from 'react'
import Logo from '../assets/images/Logo.svg'

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo"><img src={Logo} width="50px" alt="Logo Resky" /></a>
                    <div className="right hide-on-med-and-down">
                        <h6>Call Me (+62) 857 7202 5040</h6>
                    </div>
                </div>
            </div>
        </nav>
    )
}
