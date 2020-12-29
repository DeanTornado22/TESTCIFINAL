import React from 'react'

const ScoreBoard = ({ score, wrongCount, correctCount }) => {
  return (
    <div className='scoreboard'>
      <div className='correct'>
        <strong>{correctCount}</strong>
        <span>correct</span>
      </div>
      <div className='wrong'>
        <strong>{wrongCount}</strong>
        <span>wrong</span>
      </div>
    </div>
  )
}

export default ScoreBoard
