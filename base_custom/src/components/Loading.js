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
  width: '1rem',
  height: '1rem',
  margin: '30px',
  backgroundColor: '#fcfcfc',
  borderRadius: '2px',
}
const loadingCircle3 = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  margin: '30px',
  backgroundColor: '#2d2d2d',
  borderRadius: '2px',
}
const loadingCircle2 = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  margin: '30px',
  backgroundColor: '#FFE26A',
  borderRadius: '2px',
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
