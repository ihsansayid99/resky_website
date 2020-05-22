import React from 'react'
import Title from '../components/Title'
import Services from '../assets/images/service.svg'

export default function Service() {
    return (
        <section>
            <div className="container">
                <Title title="Service" />
                <div className="row">
                    <div className="col l6 s12">
                        <img className="img-service" src={Services} alt="Service Img" />
                    </div>
                    <div className="col l6 s12">
                        <p className="text-service">What are our responsibilities & Promises ?</p>
                        <p className="subtext-service">Our team at Photos won's do anything but Take a Moment in Progress. Photos won't bring yout wedding & portraits to ordinary Wedding/Potraits, We will be the best to convey your story into a moment called eternal</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
