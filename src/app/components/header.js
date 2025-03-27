"use client"

import { IoIosMenu } from "react-icons/io";
import { FaInstagram, FaGithub, FaLinkedin  } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react"



export default function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <>
            <nav className="md:hidden w-full flex flex-col items-center justify-center fixed bg-slate-950 z-10">
                <button onClick={toggleMenu}><IoIosMenu className="relative w-8 h-8"/></button>
                {isOpen && (
                <motion.div
                    className="absolute flex flex-col gap-2 w-full h-40 bg-slate-950 top-8 left-0 justify-center items-center"
                    initial={{y:-200}}
                    animate={{y:0}}
                    transition={{ duration: 1 }}    
                >
                    <a href="#">Home</a>
                    <a href="#">Projeto</a>
                    <a href="#">Contato</a>

                </motion.div>
            )}
            </nav>
            
            
            

            <nav className="hidden fixed md:flex w-full z-10 justify-center p-2 bg-slate-950 gap-12">
                <ul className="flex gap-12 font-bold ">
                    <li><a href="#" className="hover:drop-shadow-[0_0_2px_#fff] ">Home</a></li>
                    <li><a href="#" className="hover:drop-shadow-[0_0_2px_#fff]">Projetos</a></li>
                    <li><a href="#" className="hover:drop-shadow-[0_0_2px_#fff]">Contato</a></li>
                </ul>
                <div className="flex gap-8">
                    <a href="#"><FaInstagram className="h-6 w-6 hover:drop-shadow-[0_0_2px_#fff]"/></a>
                    <a href="#"><FaGithub className="h-6 w-6 hover:drop-shadow-[0_0_2px_#fff]"/></a>
                    <a href="#"><FaLinkedin  className="h-6 w-6 hover:drop-shadow-[0_0_2px_#fff]"/></a>

                </div>
            </nav>
        </>
    )
}