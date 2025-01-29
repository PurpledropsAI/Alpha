import React from 'react'
import Header from '../../components/navbar'
import Footer from '../../components/footer'
import avatar from './assets/avatar2.png'
export default function LandingPage() {
    return (
        <div className='overflow-hidden'>
            <Header />

            <div className='h-screen w-screen bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767]'>
            {/* <div style={{ backgroundImage: `url(${avatar})` }}></div> */}
            <img src={avatar} className='w-[50rem]'></img>

            </div>
            <Footer />
        </div>
    )
}
