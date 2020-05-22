import React from 'react'
import { FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa'
const LinkSocmed = {
    instagram: "https://www.instagram.com/reskypsy/",
    fb: "https://www.facebook.com/denz.r.ii.3",
    email: "mailto:masamasaphotography@gmail.com?subject=Menanyakan Jasa&body=Hi Resky, Apa Saja yang harus dipersiapkan oleh saya ? Berapa Uang Yang Harus Saya berikan ?"
}

export default function Footer() {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l12 s12 title-footer">
                            <p className="grey-text text-lighten-4">&copy; <span>{(new Date().getFullYear())}</span> Resky Photos</p>
                            <div className="icons-socmed">
                                <a href={LinkSocmed.instagram}><FaInstagram /></a> <a href={LinkSocmed.fb}><FaFacebookF /></a> <a href={LinkSocmed.email}><FaGoogle /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
