import { motion } from 'motion/react'

interface NotificationProps {
  message: string
  index: number
  onClose: () => void
}

const Notification = ({ message, onClose, index }: NotificationProps) => {
  return (
    <motion.div
      className="notification"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: index * 0.1,
      }}
      onClick={onClose}
      style={{
        zIndex: 100 + index, // Stack notifications with different zIndex
        cursor: 'pointer',
      }}
    >
      {message}
    </motion.div>
  )
}

export default Notification
