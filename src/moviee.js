import React from 'react'

const moviee = (props) => {
  return (
    
    <div className='cart'>
     <img src={props.img} alt="image" />
     <p> {props.year}</p>
     <p>Title : {props.title}</p>
    </div>

  )
}

export default moviee