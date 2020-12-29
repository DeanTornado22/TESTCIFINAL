import React from 'react'
import shuffle from 'lodash.shuffle'

const Question = ({ dataQuestion, checkAnswer }) => {
  var answers = shuffle([
    ...dataQuestion.incorrect_answers,
    dataQuestion.correct_answer,
  ])
  return (
    <div className='question-main'>
      <h3
        dangerouslySetInnerHTML={{ __html: dataQuestion.question }}
        className='text-overflow-center'
      />
      {answers.map((answer, index) => (
        <button
          key={index}
          dangerouslySetInnerHTML={{ __html: answer }}
          onClick={(e) => checkAnswer(e.target.innerText)}
        />
      ))}
    </div>
  )
}

export default Question
