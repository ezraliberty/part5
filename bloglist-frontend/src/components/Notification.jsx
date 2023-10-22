const Notification = ({ message, passed }) => {
  if (message === null) {
    return null
  }

  return <div className={passed ? 'success' : 'failed'}>{message}</div>
}

export default Notification
