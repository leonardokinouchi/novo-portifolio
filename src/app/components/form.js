"use client"

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function Form(){

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Mensagem:", message);
        // Aqui você pode enviar os dados para uma API, por exemplo
      };

    return(
        <div className="outline-1 z-10 flex flex-col bg-sky-950/80 items-center text-sm w-90 shadow-[inset_0px_0px_50px_rgba(255,255,255,0.12),0_0_30px_10px_rgba(0,0,0,1)] rounded-2xl md:w-133 ">
          <h1 className="p-3 font-bold text-xl">Contato</h1>
          <div className="flex flex-col gap-5 p-2 md:flex-row md:2">
            <button className="outline-1 w-60 flex justify-center rounded-2xl">leonardokinouchi@gmail.com</button>
            <button className="flex justify-center items-center outline-1 w-60 gap-2 rounded-2xl"><FaWhatsapp/>Whatsapp</button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full  p-4 "> 
            <input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 border rounded-2xl"/>
            <textarea  placeholder="Sua mensagem" value={message} onChange={(e) => setMessage(e.target.value)} required className="p-2 border min-h-[100px] rounded-2xl"/>
            <button type="submit" className="p-2 bg-sky-900/90 text-white rounded-2xl hover:bg-sky-700 outline-1">
            Enviar
            </button>

          </form>
        </div>
    )
}