"use client"

import { useState } from "react";

export default function Card({imagem, h1, p, link, p2, stack}){


    const [visible, setVisible] = useState(false);



    return(
        <div>

            <div onClick={() => setVisible(true)} className="cursor-pointer w-80 h-120 mt-10 hover:scale-105 transition-transform duration-200 bg-sky-950/50 outline-white outline-1 shadow-[inset_0px_0px_50px_rgba(255,255,255,0.12),0_0_30px_10px_rgba(0,0,0,1)] backdrop-blur-sm rounded-4xl relative overflow-hidden">
                <img src={imagem} className="w-full h-1/3" />
                <div className="p-10 flex flex-col gap-10" > 
                    <h1 className="font-bold text-xl">{h1}</h1>
                    <p className="text-lg">{p}</p>
                </div>
            </div>
            {visible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-sky-950 p-6 rounded-xl w-full h-[80vh] shadow-xl text-white relative animate-fade-in flex flex-col  md:w-[80vw] md:h-[95vh]">
                        {/* Fechar */}
                        <button
                        onClick={() => setVisible(false)}
                        className="absolute top-2 right-3 text-white text-2xl hover:text-red-500"
                        >
                        &times;
                        </button>

                        <img src={imagem} className="w-[90vw] h-auto object-cover rounded-md mb-4 md:w-[40vw] mx-auto"/>

                        <h2 className="text-2xl font-bold mb-2">{h1}</h2>

                        <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:bg-sky-400 text-amber-200 rounded-md transition font-sans"
                        >
                        {link}
                        </a>

                        <p className="text-amber-50 mb-4 font font-sans">{p2}</p>
                        <p className="text-white mb-4 pt-2 font-sans">{stack}</p>

                        
                    </div>
                </div>
            )}

        </div>
     
    )
}