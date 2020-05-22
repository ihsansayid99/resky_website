import React from 'react'
const LinkWhatsapp = {
    link: "https://api.whatsapp.com/send?phone=6285772025040&text=Halo%20Kak%20Resky.%0ASaya%20berminat%20Untuk%20Menggunakan%20jasa%20anda.%0AMinta%20Detail%20infonya%20dong%20ka..."
}

export default function WorkIn() {
    return (
        <section>
            <div className="container">
                <div className="row section-works">
                    <div className="col l6 ">
                        <div className="section-title">
                            <h5>Work Inquiry</h5>
                            <p>Yuk kita kerjasama, semoga saya dapat membantu banyak
                            dan hasil yang maksimal</p>
                        </div>
                    </div>
                    <div className="col l6">
                        <div className="section-work-button">
                            <a href={LinkWhatsapp.link}><button className="primary">Chat Sekarang</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
