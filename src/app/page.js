import Particles from "./components/particles";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import Card from "./components/card";
import Form from "./components/form";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative h-full w-full bg-[url(/main.webp)] bg-cover bg-no-repeat bg-center bg-fixed">

      {/** particles container */}
      <Particles></Particles>
      
      {/**conteudo da pagina */}
      <div className="relative  h-screen flex flex-col gap-5 items-center      md:flex-row md:justify-center md:gap-20"> 
        <img src="/foto.webp" className=" filter w-45 h-45 rounded-full mt-20 outline-2 shadow-[inset_0px_0px_50px_rgba(255,255,255,0.12),0_0_20px_10px_rgba(0,0,0,1)] outline-sky-500   md:w-80 md:h-80 md:mt-0 "/>
        <div className="w-3/4 bg-black/50 backdrop-blur-sm rounded-2xl flex flex-col gap-5 text-lg p-4  shadow-[inset_0px_0px_50px_rgba(255,255,255,0.12),0_0_30px_10px_rgba(0,0,0,1)] md:w-150 md:p-10 md:gap-10">
          <h1 className="font-bold text-4xl text-sky-500 text-shadow" style={{textShadow: '0px 0px 10px oklch(0.685 0.169 237.323)'}}>Full-stack Developer</h1>
          <p className="" >Graduando em Engenharia de Computação, desenvolvo aplicativos web, mobile e desktop focados em performance, praticidade e ótima experiência para o usuário.</p>
          <p className="text-yellow-300">Desenvolva sua ideia agora!</p>
          <div className="flex w-full h-full items-center place-content-evenly md:pt-10">
            <FaHtml5 className="h-8 w-8"/>
            <FaCss3Alt className="h-8 w-8"/>
            <IoLogoJavascript className="h-8 w-8"/>
            <FaReact className="h-8 w-8"/>
            <FaJava className="h-8 w-8"/>
            <FaPython className="h-8 w-8"/>
            <TbSql className="h-8 w-8"/>
            <FaNodeJs className="h-8 w-8"/>
            <DiMongodb className="h-8 w-8"/>
            <DiPostgresql className="h-8 w-8"/>
          </div>
        </div>
      </div>
      
      {/*parte 2 */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl" style={{textShadow: '0px 0px 5px rgba(255,255,255,0.5)'}}>Meus Projetos</h1>
        <div className="md:flex md:gap-10">
          <Card imagem="/projeto_dashboard_1.png" h1="Dashboard de Recebimentos" p="Sistema para adicionar clientes e seus pagementos, mostrando os dados em um Dashboard interativo." link="#"/>
          <Card imagem="/tattoo_jp.png" h1="Portifólio de tatuador" p="Site para JP-TATTOO, portifólio com galeria de imagens, contato, e informações." link="#" />
          <Card imagem="/tattoo_jp.png" h1="Portifólio de tatuador" p="Site para JP-TATTOO, portifólio com galeria de imagens, contato, e informações." link="#" />
        </div>
      </div>

      {/*parte 3 contato */}
      <div className=" flex justify-center flex-col p-10 items-center gap-10 md:flex-row ">

        <Form/>

        <div className="flex flex-col items-center gap-5 z-10">
          <div className="flex items-center bg-sky-950/60 w-90 outline-1 h-125 justify-center shadow-[inset_0px_0px_50px_rgba(255,255,255,0.12),0_0_30px_10px_rgba(0,0,0,1)] rounded-2xl"><img src="/curriculo.webp" className="w-80 rounded-2xl"></img></div>
          <button className="p-2 bg-sky-950/90 text-white rounded-2xl hover:bg-sky-700 pl-5 pr-5 outline-1">Baixar</button>
        </div>
        
      </div>

      {/**footer */}
      <Footer/>


    </div>
  );
}
