import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h3 className='text-2xl font-bold mb-4 md'>Agência de Viagens</h3>
                    <p className='mb-4'>Sua parceira de confiança para experiências de viagens inesquecíveis. Explore o mundo conosco.</p>
                </div>
                <div className='flex flex-col md:items-center'>
                    <h4 className='text-lg font-semibold'>Links Rápidos</h4>
                    <div className='flex flex-col mt-4 space-y-2'>
                        <Link to="/" className='hover:scale-105'>Início</Link>
                        <Link to="/galeria" className='hover:scale-105'>Galeria</Link>
                        <Link to="/contato" className='hover:scale-105'>Contato</Link>
                        <Link to="/sobre" className='hover:scale-105'>Sobre Nós</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-4'>Siga Nossas Redes</h2>
                    <div className='flex space-x-4 mb-4'>
                        <FaFacebookF size={24} className='text-blue-500 hover:text-blue-600 cursor-pointer' />
                        <FaInstagram size={24} className='text-pink-500 hover:text-pink-600 cursor-pointer' />
                        <FaTwitter size={24} className='text-blue-400 hover:text-blue-500 cursor-pointer' />
                        <FaYoutube size={24} className='text-red-500 hover:text-red-600 cursor-pointer' />
                    </div>
                    <form className='flex items-center justify-center mt-8'>
                        <input type="email" placeholder='Seu e-mail' 
                        className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 md:mr-0' />
                        <button type='submit' className='bg-blue-600 text-white w-48 py-2 
                        rounded-r-lg border border-blue-500'>Inscreva-se</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='flex justify-between mt-8 px-3 border-t border-gray-700 pt-4'>
            <p>&copy; 2025 Agência de Viagens. Todos os direitos reservados.</p>
            <div className='flex space-x-4'>
                <Link to="/">Política de Privacidade</Link>
                <Link to="/">Termos de Serviço</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
