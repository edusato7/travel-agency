import React from 'react'
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa'

const services = [
    {
        icon: <FaPlane className='text-4xl text-blue-500' /> ,
        title: 'Reserva de Voo',
        description: 'Reserve seu voo de forma rápida e fácil! Compare preços, escolha o melhor horário e confirme sua passagem com segurança. Tudo em poucos cliques.'
    },
    {
        icon: <FaHotel className='text-4xl text-blue-500' /> ,
        title: 'Reserva de Hotel',
        description: 'Encontre e reserve o hotel ideal com facilidade! Compare opções, escolha o melhor preço e garanta sua estadia em minutos.'
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500' />,
        title: 'Tour pelas Praias',
        description: 'Explore as praias com um tour guiado! Um profissional acompanhará você, mostrando os melhores pontos e garantindo uma experiência única à beira-mar.'
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500' />,
        title: 'Guia Turístico',
        description: 'Descubra o melhor do destino com um guia turístico local! Receba informações exclusivas e aproveite cada momento com uma experiência personalizada.'
    }
]

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Nossos Serviços</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map((service, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-4 items-center cursos-pointer
                    transform transition duration-300 hover:scale-110 cursor-pointer'>
                        <div className='mb-4'>{service.icon}</div>                        
                            <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                            <p className='text-gray-600 text-center'>{service.description}</p>                        
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Services
