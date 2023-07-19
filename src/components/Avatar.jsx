import React from 'react'
import image from '../assets/male-avatar.png'

const Avatar = ({prop}) => {
  return (
    <img src={image} className={`${prop} rounded-full`}/>
  )
}

export default Avatar