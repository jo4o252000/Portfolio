import {CaretCircleDown} from 'phosphor-react'//ok
import {GitOriginalIcon} from 'react-devicons'//ok
import "./styles/main.css";


function App() {
  return (
    //tailwind funcionando 
    <div className="max-w-[1344px] min-h-screen mx-auto flex flex-col items-center my-2 "> 
      <div className='w-auto  my-auto '>   
        <h1 className='text-slate-100 text-5xl font-light text-center'>Olá, bem vindo </h1>
        <p className='text-zinc-400 text-base font-extralight text-center'>Isso e um front-end de um dev back-end tenha piedade!!</p>
      </div>

      <div className=' animate-bounce'>
        <CaretCircleDown fontSize={50} color='#a1a1aa'/>
      </div>
    

      <div className=' bg-slate-300'>
        <img src='https://avatars.githubusercontent.com/u/60801271?v=4' className='w-5'></img>
      </div>
    </div>
  )   
}

export default App
