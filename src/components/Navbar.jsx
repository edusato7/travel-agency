import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed m-4 top-0 right-0 items-center justify-center left-0 shadow-lg z-50 bg-white rounded-4xl'>
        <div className='container px-2 flex justify-between items-center h-16'>
            <h3 className='text-2xl font-bold ml-3'>Agência de Viagens</h3>
            <div className='hidden md:flex space-x-1 text-sm font-bold items-center'>
                <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Início</Link>
                <Link to="/galeria" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Galeria</Link>
                <Link to="/contato" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Contato</Link>
                <Link to="/sobre" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Sobre Nós</Link>
                <Link to="/login"><button className='py-2 px-6 bg-gray-300 rounded-2xl cursor-pointer hover:text-white hover:bg-gray-600'>Login</button></Link>
            </div>
            <div className='md:hidden'>
                <button className='py-2 px-2 text-2xl font-bold' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-6 py-4 flex-col bg-white items-center rounded-4xl'>
            <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Início</Link>
            <Link to="/galeria" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Galeria</Link>
            <Link to="/contato" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Contato</Link>
            <Link to="/sobre" className='px-6 py-2 hover:bg-gray-600 hover:text-white hover:rounded-2xl'>Sobre Nós</Link>
            <Link to="/login"><button className='py-2 px-6 bg-gray-300 rounded-2xl'>Login</button></Link>
        </div>
        )}
    </nav>
  )
}

export default Navbar
