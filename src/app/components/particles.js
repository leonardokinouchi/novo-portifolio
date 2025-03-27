"use client"

import { motion } from "motion/react"
import { useEffect, useState, useRef } from "react";

export default function Particles(){

    const [particles, setParticles] = useState([]);
    const particleCount = useRef(0)
    

    useEffect(() => {
        
        const interval = setInterval(() => {
            
            setParticles((prevParticles) => {
                const id = `particle-${particleCount.current++}`
                const newParticles = [
                ...prevParticles,
                <Particle key={id}/>
                ].slice(-200);
                return newParticles;
            });
        }, 20); 
    }, []);
    

    return (
        <div className="absolute h-full w-full overflow-hidden">
            {particles}
        </div>
    )
}

function Particle(){
    const [render, setRender] = useState(false)

    useEffect(() => {
        setRender(true)
        const timer = setTimeout(() => setRender(false), 8000);
        return () => clearTimeout(timer);
    }, []);

    const moveX = Math.random() * 300 - 150;
    const moveY = Math.random() * 300 - 150;
    const rand_top = Math.random() * 100
    const rand_left = Math.random() * 80 + 10
    const rand_size = Math.random() * 4 + 2

    

    return render ? (
        <motion.div
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{ x: moveX, y: moveY, opacity: 0 }}
            transition={{
                x: { duration: 3, ease: "easeInOut" },
                y: { duration: 3, ease: "easeInOut" },
                opacity: {duration: 3, ease: "easeInOut" }
              }}
            className="absolute bg-amber-50 rounded-full"
            style={{
                height: `${rand_size}px`,
                width: `${rand_size}px`,
                top: `${rand_top}%`,
                left: `${rand_left}%`,
                boxShadow: '0px 0px 10px #ffff'
            }}
        />
    ) : null;
}