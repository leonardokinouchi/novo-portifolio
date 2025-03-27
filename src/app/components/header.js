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
            <nav className="md:hidden w-full flex flex-col items-center justify-center fixed bg-slate-950 z-20">
                <button onClick={toggleMenu}><IoIosMenu className="relative w-10 h-10"/></button>
            </nav>
            {isOpen && (
                <motion.div
                    className="absolute flex flex-col gap-4 w-screen h-50 bg-slate-950 top-5 left-0 justify-center items-center z-10"
                    initial={{y:-200}}
                    animate={{y:0}}
                    transition={{ duration: 1, ease: "easeInOut" }}    
                >
                    <a href="#" className="hover:drop-shadow-[0_0_2px_#fff]">Home</a>
                    <a href="#" className="hover:drop-shadow-[0_0_2px_#fff]">Projeto</a>
                    <a href="#" className="hover:drop-shadow-[0_0_2px_#fff]">Contato</a>
                    <div className="flex gap-4">
                        <a href="#"><FaInstagram className="h-6 w-6 hover:drop-shadow-[0_0_2px_#fff]"/></a>
                        <a href="#"><FaGithub className="h-6 w-6 hover:drop-shadow-[0_0_2px_#fff]"/></a>
                        <a href="#"><FaLinkedin  className="h-6 w-6 hover:drop-shadow-[0_0_2px_#fff]"/></a>
                    </div>

                </motion.div>
            )}
            
            
            

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