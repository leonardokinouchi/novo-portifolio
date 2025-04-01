export default function Card({imagem, h1, p, link}){
    return(
       <a href={link}>
         <div className="w-80 h-120 mt-10 hover:scale-105 transition-transform duration-200 bg-sky-950/50 outline-white outline-1 shadow-[inset_0px_0px_50px_rgba(255,255,255,0.12),0_0_30px_10px_rgba(0,0,0,1)] backdrop-blur-sm rounded-4xl relative overflow-hidden">
            <img src={imagem} className="w-full h-1/3" />
            <div className="p-10 flex flex-col gap-10" > 
                <h1 className="font-bold text-xl">{h1}</h1>
                <p className="text-lg">{p}</p>
            </div>
        </div>
       </a>
    )
}