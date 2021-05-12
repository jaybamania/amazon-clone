import React from 'react'
import Product from './Components/Product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            {/* Home 🏘️ */}
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M16/1500x600_Hero-Tall_JPN._CB669022949_.jpg"
                />

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">

                </div>

                <div className="home__row">

                </div>
            </div>
        </div>
    )
}

export default Home
