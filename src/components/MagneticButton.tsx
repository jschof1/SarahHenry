import { motion, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';

export function MagneticButton({ 
  children, 
  className = '', 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.35;
    const y = (e.clientY - top - height / 2) * 0.35;
    setPos({ x, y });
  };

  const onLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={pos}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
