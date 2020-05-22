import React from 'react'
import PictHeader from '../assets/images/Photo.svg'
import Collection from '../components/Collection'
import Service from '../components/Service'
import Jumbo from '../components/Jumbo'
import WorkIn from '../components/WorkIn'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row ">
                        <div className="col l7">
                            <p>Resky Pertiwa Sycolone</p>
                            <h1>Photographer Freelancer Based in Cianjur</h1>
                            <p className="subtitle">Seorang freelancer dari cianjur, yang bergerak dibidang photographer. sudah banyak sekali yang menggunakan jasa saya, seperti wedding, model brand dan personal.</p>
                        </div>
                        <div className="col l5">
                            <img className="img-header" src={PictHeader} alt="Resky" width="358" />
                        </div>
                    </div>
                </div>
            </div>
            <Collection />
            <Service />
            <Jumbo />
            <WorkIn />
            <Footer />
        </>
    )
}
