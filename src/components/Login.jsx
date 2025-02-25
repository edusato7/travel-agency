import {FaLock, FaUser} from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert("Enviando os dados... " + username, " - ", + password);
  }

  return (

    <div className='container relative h-screen w-full max-w-dvw bg-cover bg-center' 
        style={{backgroundImage: "url('/src/assets/images/caribe.jpg')"}}>
      <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
        <div className='w-md mx-4 py-2 items-center justify-center border-2 border-white rounded-2xl bg-white/70'>      
            <form onSubmit={handleSubmit}>
                <h1 className='text-2xl text-center font-bold'>Acesse o Sistema</h1>
                    <div className='flex items-center justify-center my-2 mt-4'>
                        <input className='border border-gray-500 rounded' type="e-mail" placeholder='E-mail' required onChange={(e) => setUsername(e.target.value)}/>
                        <FaUser className='mx-2 text-blue-500' />
                    </div>
                    <div className='flex items-center justify-center my-2'>
                        <input className='border border-gray-500 rounded' type="password" placeholder='Senha' required onChange={(e) => setPassword(e.target.value)}/>
                        <FaLock className='mx-2 text-blue-500' />
                    </div>

                    <div className='flex justify-center my-2 text-sm'>
                        <label>
                            <input type="checkbox" />
                            Lembrar de mim
                        </label>  
                        <a className='ml-2 mr-6 text-sm hover:underline' href="#">Esqueci a senha</a>                      
                    </div>

                    <div className='text-center py-2'>
                      <button className='border font-semibold bg-blue-500 text-white px-12 py-2 rounded-full
                      transform transition duration-300 hover:scale-105 cursor-pointer'>Entrar</button>
                    </div>
                    <div className='text-center'>
                        <p>
                            Não tem uma conta? <a className='font-semibold my-2 hover:underline' href="#">Cadastrar</a>
                        </p>
                    </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login