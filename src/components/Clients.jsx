import React from 'react'

const testimonials = [
    {
        name: 'Bianca Neves',
        image: '/src/assets/images/cliente1.jpg',
        text: 'Minha viagem foi incrível! O atendimento foi excelente, os passeios bem organizados e os destinos deslumbrantes. Super indico!',
        location: 'Curitiba, PR'
    },
    {
        name: 'Wellington Martins',
        image: '/src/assets/images/cliente2.png',
        text: '"Foi tudo ótimo! A viagem superou minhas expectativas. Organização impecável e atendimento top. Com certeza, voltarei e indico a todos!"',
        location: 'Belo Horizonte, MG'
    },
    {
        name: 'Cláudia Soares',
        image: '/src/assets/images/cliente3.jpg',
        text: 'Viagem fantástica! Experiência maravilhosa e atendimento de primeira. Valeu cada momento, recomendo com certeza!',
        location: 'Porto Alegre, RS'
    }
]

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Clientes Satisfeitos</h2>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='bg-white rounded-lg p-6 shadow-md text-center cursor-pointer 
                        transform transition duration-300 hover:scale-110'>
                        <img src={testimonial.image} alt="" className='w-24 h-24 rounded-full mx-auto mb-4'/>                        
                            <h3 className='text-xl font-bold mb-2'>{testimonial.name}</h3>
                            <p className='text-gray-600 text-center'>{testimonial.location}</p>                        
                            <p className='text-gray-600 text-center italic'>{testimonial.text}</p>                        
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Clients
