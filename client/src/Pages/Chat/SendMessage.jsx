import './style.css'

function SendMessage() {
    // Implement message sending functionality here
    return (
      <form className="send-message">
        <textarea placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    );
}
  
export default SendMessage;
  