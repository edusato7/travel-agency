import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100'>
      <div 
        className='relative bg-cover bg-top h-100' 
        style={{backgroundImage: "url('/src/assets/images/caribe.jpg')"}}>

        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center'>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Sobre Nós
          </h4>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-center justify-center'>
                <img src="/src/assets/images/caribe.jpg" alt="Sobre Nós" className='rounded-lg shadow-md w-full h-auto' />
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-2xl font-bold mb-4'>Quem Somos Nós</h3>
                <p className='text-gray-700 mb-4'>
                    Nosso objetivo é proporcionar viagens que conectem você aos lugares mais incríveis do planeta, com toda a comodidade e segurança. Trabalhamos com os melhores fornecedores e destinos, garantindo qualidade, preço justo e suporte contínuo, antes, durante e após a sua viagem.
                    Seja você um viajante de aventura, um amante da cultura ou alguém que busca relaxamento, temos o pacote perfeito para atender às suas necessidades. Cada viagem é planejada com atenção aos detalhes, sempre buscando as melhores opções de hospedagem, transporte e passeios.
                </p>
                <h3 className='text-2xl font-bold mb-4'>Nossa missão</h3>
                <p className='text-gray-700 mb-4'>
                    Realizar sonhos e criar memórias inesquecíveis, proporcionando momentos únicos para cada viajante.
                </p>
                <h3 className='text-2xl font-bold mb-4'>Nosso compromisso</h3>
                <p className='text-gray-700 mb-4'>
                    Comprometidos com a excelência, oferecendo o melhor atendimento e a experiência de viagem mais completa e prazerosa possível.
                    Junte-se a nós e deixe o mundo ser seu próximo destino!
                </p>
            </div>
        </div>
      </div>
 
    </div>
  )
}

export default About
