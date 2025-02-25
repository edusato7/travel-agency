import React from 'react'
import Destination from '../components/Destination'
import Services from '../components/Services'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <>
    <div className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/src/assets/images/caribe.jpg')"}}>
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center px-10'>Explore o Mundo conosco!</h1>
        <p className='text lg md:text-2xl text-white mb-8'>Descubra lugares incríveis com ofertas exclusivas.</p>
        <a href=""><button
        className='border font-bold text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500
            transform transition duration-300 hover:scale-105 cursor-pointer'
        >Explorar</button></a>
      </div>
    </div>
    <Destination />
    <Services />
    <Clients />
    </>
  )
}

export default Home
