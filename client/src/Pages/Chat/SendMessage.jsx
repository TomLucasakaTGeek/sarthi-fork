import './style.css'

function SendMessage() {
    // Implement message sending functionality here
    return (
      <form className="send-message">
        <textarea id='textspace' placeholder="Type your message..." />
        <button id='sendbutton' type="submit">Send</button>
      </form>
    );
}
  
export default SendMessage;
  