import './style.css'
// import people = require('people from database')
import { chats } from './ChatList'

function SearchBox({searchitem}) {
  const right_person = ''
  for(let key in People) {
    let pseudoname = key.People.Name
     if(pseudoname === searchitem)
        right_person = pseudoname
  }
    if(right_person == '') 
      return "Not Found"
    else 
      return right_person  
}

function Sidebar() {
  return (
    <>
      <SearchBox onsearch={searchitem} className='searchbox'/>
      
      <ul className='chatlist'>
        {chats.map(chat => 
        <li className='contacts'>
          <img src={chat.profilePic} alt="Img" className='profilepic'/>
          <div className='box'>
            <span>{chat.name}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </li>
      )}
      </ul>

    </>
  )
}

export default Sidebar