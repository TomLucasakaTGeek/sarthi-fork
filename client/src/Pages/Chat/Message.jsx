import './style.css'

function Message({message}) {
    const isSenior = message.sender === 'Senior Dev';
    return (
      <li className={`message ${isSenior ? 'senior' : 'junior'}`}>
        <span className="sender">{message.sender}</span>
        <p>{message.content}</p>
      </li>
    );
  }
  
export default Message;
  