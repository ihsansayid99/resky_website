import React from 'react'
import Grid1 from '../assets/images/grid1.svg'
import Grid2 from '../assets/images/grid2.svg'
import Grid3 from '../assets/images/grid3.svg'
import Grid4 from '../assets/images/grid4.svg'
import Grid5 from '../assets/images/grid5.svg'
import Grid6 from '../assets/images/grid6.svg'

export default function Jumbo() {
    return (
        <div className="jumbotron-grid">
            <img className="img-grid" src={Grid1} alt="" />
            <img className="img-grid" src={Grid2} alt="" />
            <img className="img-grid" src={Grid3} alt="" />
            <img className="img-grid" src={Grid4} alt="" />
            <img className="img-grid" src={Grid5} alt="" />
            <img className="img-grid" src={Grid6} alt="" />
        </div>
    )
}
