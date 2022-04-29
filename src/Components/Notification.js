const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    
      return (
        <h3 className={message.status}>
          {message.payload}
        </h3>
      )
    }
  
    export default Notification;