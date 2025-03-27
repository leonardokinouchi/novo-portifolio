import Particles from "./components/particles";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaNodeJs   } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";





export default function Home() {
  return (
    <div className="relative h-full w-full bg-[url(/main.webp)] bg-cover bg-no-repeat bg-center bg-fixed">

      
      
      {/** particles container */}
      <Particles></Particles>
      


      {/**conteudo da pagina */}
      <div className="relative  h-screen flex flex-col gap-5 items-center      md:flex-row md:justify-center md:gap-20">
        <img src="/foto.webp" className=" filter  w-45 h-45 rounded-full mt-20 outline-2 outline-sky-500 drop-shadow-2xl     md:w-80 md:h-80 md:mt-0 "/>
        <div className="w-3/4 bg-black/60 rounded-2xl flex flex-col gap-5 text-lg p-4     md:w-150">
          <h1 className="font-bold text-4xl text-sky-500 text-shadow">Full-stack Developer</h1>
          <p className="">Graduando em Engenharia de Computação, desenvolvo aplicativos web, mobile e desktop focados em performance, praticidade e ótima experiência para o usuário.</p>
          <p className="text-yellow-300">Desenvolva sua ideia agora!</p>
          <div className="flex w-full h-full items-center place-content-evenly">
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
      
      
    </div>
  );
}
