import './style.css'
import {seniormessages, juniormessages} from './Egmessage';

function Message() { 
  return (
      <>
        <li className='textfromsenior'> 
          <span className="sender">Senior</span>
          <p>{seniormessages}</p>
      </li>
      
      <li className='textfromjunior'>
        <span className="sender">Junior</span>
        <p>{juniormessages}</p>
      </li>
      </>
    );
  }
  
export default Message;
  