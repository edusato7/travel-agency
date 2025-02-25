import React from 'react'


const destinations = [

    {
        image: "/src/assets/images/havai.jpg",
        title: 'Havaí, EUA',
        description: 'O Havaí é um paraíso tropical com praias douradas, paisagens vulcânicas e águas cristalinas. Oferece atividades como surfe, mergulho e trilhas, além de uma cultura rica e acolhedora. Ideal para quem busca relaxamento, aventura e conexão com a natureza.'
    },
    {
        image: '/src/assets/images/indonesia.jpg',
        title: 'Bali, Indonésia',
        description: 'Bali é um destino exótico na Indonésia, famoso por seus templos, arrozais, montanhas vulcânicas e praias paradisíacas. Oferece surfe em Kuta e tranquilidade em Ubud, além de uma gastronomia vibrante e uma atmosfera acolhedora, perfeita para quem busca aventura e imersão na cultura local.'
    },
    {
        image: '/src/assets/images/australia.jpg',
        title: 'Sydney, Austrália',
        description: 'Sydney, a maior cidade da Austrália, é conhecida por suas praias, arquitetura icônica e vida urbana vibrante. Destaques incluem a Opera House, a Sydney Harbour Bridge, as praias de Bondi e Manly, e o histórico The Rocks. A cidade também oferece parques como o Royal Botanic Garden e uma rica vida cultural com museus e eventos.'
    },
    {
        image: '/src/assets/images/cancun.jpg',
        title: 'Cancún, México',
        description: 'Cancún, no México, é um destino paradisíaco com praias de areia branca, águas cristalinas e resorts luxuosos. Conhecida por sua vida noturna vibrante e proximidade com ruínas maias, como Tulum e Chichén Itzá, oferece uma combinação perfeita de relaxamento, aventura e cultura.'
    }
]

const Destination = () => {
  return (
    <div className='py-12 bg-gray-100' >
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Destinos em Destaque</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {destinations.map((city, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursos-pointer'>
                        <img src={city.image} alt={city.title} className='w-full h-48 object-cover 
                        transform transition duration-300 hover:scale-110 cursor-pointer' />
                        <div className='p-4'>
                            <h3 className='text-xl font-bold mb-2'>{city.title}</h3>
                            <p className='text-gray-600'>{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Destination
