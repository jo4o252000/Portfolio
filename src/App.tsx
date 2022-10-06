import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import {CaretCircleDown,Bookmark, Moon} from 'phosphor-react'//ok
import {GitOriginalIcon} from 'react-devicons'//ok
import moon from './img/moon.jpg'
import BgBlackAndBlue from './img/BgBlackAndBlue.png'
import BgBlue from './img/BgBlue.png'
import BgFinal from './img/BgFinal.png'
import Finish from './img/CompletFinal.png'
import "./styles/main.css";


function App() {
  return (
    //tailwind funcionando 
    <div className="max-w-[1344px]  mx-auto flex flex-col items-center "> 
      <Parallax pages={4} style={{top:'0', left:'0'}}>
        <ParallaxLayer className="" offset={0} speed={2} factor={2} style={{backgroundImage:`url(${moon})`, backgroundSize:'cover'}}>
          <div className="w-[1344px] min-h-screen mx-auto mt- flex flex-col items-center  ">
            <div className='w-auto  my-auto '>   
              <h1 className='text-5xl font-black text-center font-FontTech'>Olá, bem vindo </h1>
              <p className='text-base font-semibold text-center'>Isso e um front-end de um dev back-end tenha piedade!!</p>
            </div>
            <div className='mb-2 animate-bounce'>
              <CaretCircleDown fontSize={50} color='#000000'/>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} factor={3} />
        <ParallaxLayer offset={1} speed={0.5} style={{display:'flex', justifyContent:'center'}}>
          <div className ="w-[1344px] min-h-screen mx-auto flex flex-col items-center ">
            <div className='flex-col mt-16 p-5 border-double border-4 border-zinc-500 rounded-xl items-center'>
              <img src='https://avatars.githubusercontent.com/u/60801271?v=4' className='w-36 rounded-full m-auto -mt-20 flex'></img>
              <h1 className='text-slate-100 text-3xl font-medium mx-44 mt-8 flex'>Minha historia <Bookmark className='mt-2'/></h1>
              <p className='text-zinc-400 font-light mt-5 text-center'>Olá, eu sou o joão tenho 22 anos e sou de São Paulo. Meu Primeiro contato <br />
              com um computador eu era bem novo tinha menos de 6 anos, na verdade <br />era algumas partes de um computador tinha um monitor, dois teclados e 
              <br/> um mouse. Depois de um tempo lembro que meus pais compraram a cpu <br/>e lembro até hoje da gente tentando conectar a internet pelo ig, a gente <br/>
              nunca conseguiu fazer aquilo funcionar kkk. Depois de muitas tentativas 
              <br/>desistimos e embalamos e guardamos todo o computador em cima do
              <br/>guarda roupa, ainda bem que desistimos pois depois de algumas semanas
              <br/> entraram na nossa casa e roubaram tudo menos o computador que estava
              <br/>em cima do guarda roupa. Não consigo esquecer a frase da minha mãe 
              <br/> "você e seu pai não queria que eu guardasse o computador, foi a unica coisa 
              <br/> que eles não acharam" kkkkk. Depois do roubo nos mudamos para Taboão 
              <br/>da serra e a saga do computador continuou so que de casa nova, meu tio 
              <br/>tinha um amigo que era dono de uma lan house ele me ajudou a dar alguns
              <br/>upgrade no computador e ele instalou alguns jogos,finalmente eu tinha um 
              <br/>computador funcionando mas ainda sem internet kkkkk.Pelo menos conseguia
              <br/>me diventir com alguns jogos até o dia que o computador faleceu. Em uma que-
              <br/>da de energia queimou todo o meu computador o cheiro de queimado ficou no 
              <br/>quarto inteiro. Meus pais conseguiram comprar outro computador só depois 
              <br/>de alguns anos e lembro da sensação maravilhosa que foi quando abri ele
              <br/>dessa vez eu tinha tudo computador e interner kkkk. </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )   
}

export default App
