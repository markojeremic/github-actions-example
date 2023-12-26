import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profpic1.png';
import Networks from '../components/Networks'


function Home() {
  return (
    <div className="condiv home">
             <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['We are Antonije and Marko!', 'We are IT professionals!']} speed={100} eraseDelay={700}/>
            <Networks />
            </div>
  )
}

export default Home