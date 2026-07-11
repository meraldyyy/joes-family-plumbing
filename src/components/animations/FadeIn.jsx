import { motion } from "framer-motion";

const directions = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  none: { x: 0, y: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
  className = "",
}) {
  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...initial,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}