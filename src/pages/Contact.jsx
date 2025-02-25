import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100'>
      <div 
        className='relative bg-cover bg-top h-100' 
        style={{backgroundImage: "url('/src/assets/images/caribe.jpg')"}}>

        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center'>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Contato
          </h4>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-bold mb-4'>Informações de Contato</h3>
            <div className='flex items-center mb-4'>
              <FaEnvelope className='text-blue-500 mr-2'/>
              <p>info@agenciadeviagens.com.br</p>
            </div>
            <div className='flex items-center mb-4'>
              <FaPhone className='text-blue-500 mr-2'/>
              <p>+55 (99) 9 9999-9999</p>
            </div>
            <div className='flex items-center mb-4'>
              <FaMapMarkerAlt className='text-blue-500 mr-2' />
              <p>Rua das Viagens, 000 - Brasil</p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6'>            
            <h3 className='text-xl font-bold mb-4'>Entre em contato</h3>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Nome</label>
                <input type="text" className='w-full p-2 border border-gray-300 rounded' placeholder='Seu nome' />
              </div>
              <div>
                <label className='block text-gray-700 mb-2'>E-mail</label>
                <input type="email" className='w-full p-2 border border-gray-300 rounded' placeholder='Seu e-mail' />
              </div>
              <div>
                <label className='block text-gray-700 mb-2'>Mensagem</label>
                <textarea className='w-full p-2 border border-gray-300 rounded' placeholder='Sua mensagem' id=""></textarea>
              </div>
              <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded'>Enviar</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
