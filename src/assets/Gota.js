import React from 'react'

export const Gota = ({ bgColor = '#FF9D07', setId }) => {

    
  return (
      <svg
        id={setId}
        width="262"
        height="261"
        viewBox="0 0 262 261"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M0.839844 130.35C0.839844 202.339 59.1991 260.699 131.189 260.699C203.179 260.699 261.538 202.339 261.538 130.35V0.000518799H131.189C59.1991 0.000518799 0.839844 58.3598 0.839844 130.35Z" fill={bgColor} />
      </svg>
  )
}
