import React from 'react'
import home_img from '../../Images/peer_mentoring.jpg'
import './home.css'

const Home_image = () => {
  return (
    <>
        <div className="main-img">
            <img src={home_img} alt="Homeimage"  />
        </div>
    </>
  )
}

export default Home_image;