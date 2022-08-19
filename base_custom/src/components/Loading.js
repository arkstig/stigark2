import { motion } from 'framer-motion'

const loadingContainer = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const loadingCircle = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  margin: '30px',
  backgroundColor: '#ed0b70',
  borderRadius: '1rem',
}
const loadingCircle3 = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  margin: '30px',
  backgroundColor: '#482673',
  borderRadius: '1rem',
}
const loadingCircle2 = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  margin: '30px',
  backgroundColor: '#FFE26A',
  borderRadius: '1rem',
}

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: '10%',
  },
  end: {
    y: '200%',
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
}

export default function Loading() {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle3}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle2}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  )
}
