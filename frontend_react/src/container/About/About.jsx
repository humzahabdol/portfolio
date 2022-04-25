import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import './About.scss'
import { images } from '../../constants';

const abouts = [ 
  {title: 'Web Development', description: 'I am a good developer', imageUrl: images.about01},
  {title: 'Frontend Developer', description: 'I am a good developer', imageUrl: images.about02},
  {title: 'Backend Developer', description: 'I am a good developer', imageUrl: images.about03},
  {title: 'Azure Cloud Developer', description: 'I am a good developer', imageUrl: images.about04}
]

const About = () => {
  return (
    <>
    <h2 className="head-text">I Know that <span>Good Devs</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imageUrl} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
  </>
  )
}

export default About