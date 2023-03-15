import React from 'react'
import user from './images/user.jpg'
import Image from 'react-bootstrap/Image'
import './user.css';

const User = () => {
  return (
    <>

       <div className='user_image'>
           <Image className='user_img' roundedCircle="true" src={user} width="160" alt="user" />
       </div>
         <div className='user_name'>
            <p>Name</p>
            <p className='bold'>Rahul Aggarwal</p>
            <p>Roll No:- <span className='bold'>22CSU000</span></p>
         </div>
    </>
  )
}

export default User