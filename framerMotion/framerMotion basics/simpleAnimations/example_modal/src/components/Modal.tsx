import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const Modal = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default Modal
