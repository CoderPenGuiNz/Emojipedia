import React from 'react'

function Content(props) {
  return (
     <div className="term">
    <dt>
      <span className="emoji" role="img" >
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>{props.meaning}</dd>
  </div>
  )
}

export default Content