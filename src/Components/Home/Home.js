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
                    <Product
                        id="456781" 
                        title="
                        Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                        image="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"
                        price={200}
                        rating={3}
                    />
                    <Product
                        id="456782" 
                        title="Seagate Portable 
                        2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
                        image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
                        price={300}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="456783"

                        title="
                        Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins"
                        image="https://images-na.ssl-images-amazon.com/images/I/31Ikl-fF5PL.jpg"
                        price={300}
                        rating={5}
                    />
                    <Product
                        id="456784" 
                        title="
                        Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
                        image="https://images-na.ssl-images-amazon.com/images/I/41Y15o6btZL.jpg"
                        price={300}
                        rating={5}
                    />
                    <Product
                        id="456785" 
                        title="
                        iPhone Charger [Apple MFi Certified] YEFOOT 5Pack(3/3/6/6/10FT) Compatible iPhone 12Pro Max/12Pro/12/11/Pro/Xs Max/X/8 and More-Silver&White"
                        image="https://images-na.ssl-images-amazon.com/images/I/51gZx4USzoL.jpg"
                        price={150}
                        rating={2}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="456786" 
                        title="
                        HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                        image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
                        price={1000}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
