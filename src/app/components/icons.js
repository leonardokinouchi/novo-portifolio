"use client"

import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { motion } from "motion/react";



export default function Icons(){
    return(
        <motion.div className="flex w-full h-full items-center place-content-evenly md:pt-10">
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
        </motion.div>
    )
}