import './App.css'
import React, { useEffect, useState } from 'react'
import Question from './components/Question'
import ScoreBoard from './components/ScoreBoard'
import ResultModal from './components/ResultModal'

export default function App() {
  const [dataQuestion, setDataQuestion] = useState(null)
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)

  const getQuestion = () => {
    let url =
      'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDataQuestion(data.results[0])
      })
    setIsCorrect(null)
  }

  const checkAnswer = (answer) => {
    console.log(answer)
    if (answer === dataQuestion.correct_answer) {
      setScore((score) => score + 10)
      setCorrectCount((correct) => correct + 1)
      setIsCorrect(true)
    } else {
      setWrongCount((wrong) => wrong + 1)
      setIsCorrect(false)
    }
  }

  useEffect(() => {
    getQuestion()
  }, [])
  return (
    <div className='app'>
      {dataQuestion && isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          getQuestion={getQuestion}
          dataQuestion={dataQuestion}
        />
      )}
      <div className='question-header'>
        <div>
          Your score: <span className='scorepoint'>{score}</span>
        </div>
        <ScoreBoard
          score={score}
          wrongCount={wrongCount}
          correctCount={correctCount}
        />
      </div>
      {dataQuestion && (
        <Question dataQuestion={dataQuestion} checkAnswer={checkAnswer} />
      )}
      <div className='question-footer'>
        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  )
}
