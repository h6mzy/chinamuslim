import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Notification from './Notification'

const NotificationStack = () => {
  const [notifications, setNotifications] = useState<string[]>([])

  // Add a new notification
  const addNotification = (message: string) => {
    setNotifications((prev) => [...prev, message])

    // Auto remove the notification after 5 seconds
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((msg) => msg !== message)
      )
    }, 5000) // 5 seconds
  }

  // Remove a notification when clicked
  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      <button onClick={() => addNotification('New notification!')}>
        Show Notification
      </button>

      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <AnimatePresence>
          {notifications.map((message, index) => (
            <Notification
              key={index}
              message={message}
              index={index}
              onClose={() => removeNotification(index)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NotificationStack
