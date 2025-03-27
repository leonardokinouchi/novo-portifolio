"use client"

import { motion } from "motion/react";
import { useEffect, useState, useRef, memo, useMemo, useCallback } from "react";

// Hook customizado para gerenciar partículas
function useParticles(intervalTime = 20, maxParticles = 200) {
  const [particles, setParticles] = useState([]);
  const particleCount = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) => {
        const newParticles = [
          ...prevParticles,
          { id: `particle-${particleCount.current++}` }
        ].slice(-maxParticles);
        return newParticles;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, maxParticles]);

  return { particles, setParticles };
}

export default function Particles() {
  const { particles, setParticles } = useParticles();

  // Memoriza a função de remoção para evitar que ela mude a cada render.
  const removeParticle = useCallback((id) => {
    setParticles((prevParticles) => prevParticles.filter(p => p.id !== id));
  }, []);

  return (
    <div className="absolute h-full w-full overflow-hidden">
      {particles.map((particle) => (
        <MemoizedParticle key={particle.id} id={particle.id} onComplete={removeParticle} />
      ))}
    </div>
  );
}

function Particle({ id, onComplete }) {
  // Calcula os valores apenas uma vez com useMemo
  const moveX = useMemo(() => Math.random() * 300 - 150, []);
  const moveY = useMemo(() => Math.random() * 300 - 150, []);
  const rand_top = useMemo(() => Math.random() * 100, []);
  const rand_left = useMemo(() => Math.random() * 80 + 10, []);
  const rand_size = useMemo(() => Math.random() * 4 + 2, []);

  // O efeito que notifica o pai para remover a partícula
  useEffect(() => {
    const timer = setTimeout(() => onComplete(id), 8000);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0 }}
      animate={{ x: moveX, y: moveY, opacity: 0 }}
      transition={{
        x: { duration: 3, ease: "easeInOut" },
        y: { duration: 3, ease: "easeInOut" },
        opacity: { duration: 3, ease: "easeInOut" }
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
  );
}

// Memoriza o componente para evitar re-renderizações desnecessárias se as props não mudarem
const MemoizedParticle = memo(Particle);
