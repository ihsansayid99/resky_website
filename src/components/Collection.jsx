import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'

export default function Collection() {
    return (
        <section>
            <div className="container">
                <Title title="Collection" />
                <div className="row">
                    <div className="col l6 s12">
                        <div className="collection-item">
                            <div className="collection-detail">
                                <Link to="/potrait"><h5 className="text-inner-img">POTRAIT'S</h5></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col l6 s12">
                        <div className="collection-item2">
                            <div className="collection-detail">
                                <Link to="/wedding"><h5 className="text-inner-img">WEDDING'S</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
