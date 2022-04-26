import React from 'react';
import {  BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'> 

        <div>
          <a href='https://www.instagram.com/travelwithhumz/' title="insta"><BsInstagram /></a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/humzah-abdol/' title="facebook"><FaLinkedin /></a>
        </div>
        <div>
            <a href='https://github.com/humzahabdol' title="github"><FaGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia