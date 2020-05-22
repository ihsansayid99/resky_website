import React from 'react'
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
                                <h5 className="text-inner-img">POTRAIT'S</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col l6 s12">
                        <div className="collection-item2">
                            <div className="collection-detail">
                                <h5 className="text-inner-img black-text">WEDDING'S</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
