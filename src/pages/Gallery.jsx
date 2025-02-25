import React from 'react'


const images = [
    '/src/assets/images/gal1.jpg',
    '/src/assets/images/gal2.jpg',
    '/src/assets/images/gal3.jpg',
    '/src/assets/images/gal4.jpg',
    '/src/assets/images/gal5.jpg',
    '/src/assets/images/gal6.jpg',
    '/src/assets/images/gal7.jpg',
    '/src/assets/images/gal8.jpg',
    '/src/assets/images/gal9.jpg',
    '/src/assets/images/gal10.jpg',
    '/src/assets/images/gal11.jpg',
    '/src/assets/images/gal12.jpg',
    '/src/assets/images/gal13.jpg',
    '/src/assets/images/gal14.jpg',
    '/src/assets/images/gal15.jpg',
    '/src/assets/images/gal16.jpg',
]

const Gallery = () => {
  return (
    <div>
        <div className='relative bg-cover bg-top h-100' 
            style={{backgroundImage: "url('/src/assets/images/caribe.jpg')"}}>
        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center'>
            <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Galeria</h4>
        </div>
        </div>

        <div>
            <div className='container mx-auto px-4'>
                <div className='grid gap-6 py-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {images.map (image => (
                        <div className='rounded-lg overflow-hidden shadow:md hover:scale-102 transition'>
                            <img src={image} alt="" className='w-full h-full object-cover' />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    </div>

  )
}

export default Gallery
