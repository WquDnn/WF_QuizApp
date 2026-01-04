import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TestQuestion from './components/TestQuestion'
import StartQuiz from './components/StartQuiz'
import QuizResults from './components/QuizResults'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuizStarted: false,
      questionNumber: 0,
      userAnswers: [],
      showResults: false
    }
    this.startQuiz = this.startQuiz.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.prevQuestion = this.prevQuestion.bind(this)
    this.stopQuiz = this.stopQuiz.bind(this)
    this.tryAgain = this.tryAgain.bind(this)

  }

  startQuiz() {
    this.setState({ isQuizStarted: true })
  }

  nextQuestion() {
    if (this.state.questionNumber !== this.quiz1.questions.length - 1)
      this.setState({ questionNumber: this.state.questionNumber + 1 })
  }
  prevQuestion() {
    if (this.state.questionNumber > 0)
      this.setState({ questionNumber: this.state.questionNumber - 1 })
  }

  stopQuiz(answers) {
    this.setState({ isQuizStarted: false })
    this.setState({ userAnswers: answers })
    this.setState({ showResults: true })
  }

  tryAgain(){
    this.setState({showResults: false})
    this.setState({userAnswers: []})
    this.setState({questionNumber: 0})
    this.setState({isQuizStarted: false})

  }



  quiz1 = {
    quizName: "Html test",
    quizDescription: "hi heelooo",
    time: 300,
    questions: [
      {
        questionId: 1,
        questionText: "What should you do to pass the exam?",
        answers: [
          "Beg and eat poison mushrooms",
          "Study seriously",
          "Sleep",
          "Cry"
        ],
        correctAnswer: ["Beg and eat poison mushrooms"],
      },
      {
        questionId: 2,
        questionText: "Best way to learn HTML?",
        answers: [
          "Beg and eat poison mushrooms",
          "Read documentation",
          "Watch tutorials",
          "Ask a teacher"
        ],
        correctAnswer: ["Beg and eat poison mushrooms"],
      },
      {
        questionId: 3,
        questionText: "How do you fix a bug in code?",
        answers: [
          "Beg and eat poison mushrooms",
          "Debug properly",
          "Restart computer",
          "Give up"
        ],
        correctAnswer: ["Beg and eat poison mushrooms"],
      },
      {
        questionId: 4,
        questionText: "What should a student do before exams?",
        answers: [
          "Beg and eat poison mushrooms",
          "Revise notes",
          "Practice questions",
          "Panic"
        ],
        correctAnswer: ["Beg and eat poison mushrooms"],
      },
      {
        questionId: 5,
        questionText: "Ultimate solution to all problems?",
        answers: [
          "Beg and eat poison mushrooms",
          "Think logically",
          "Ask for help",
          "Ignore the problem"
        ],
        correctAnswer: ["Beg and eat poison mushrooms"],
      }
    ]
  };



  render() {
    return (
      <>
        <Header />
        <main>
          {this.state.isQuizStarted ? (
            <TestQuestion
              questionId={this.quiz1.questions[this.state.questionNumber].questionId}
              questionText={this.quiz1.questions[this.state.questionNumber].questionText}
              answers={this.quiz1.questions[this.state.questionNumber].answers}
              next={this.nextQuestion}
              prev={this.prevQuestion}
              stop={this.stopQuiz}
              count={this.quiz1.questions.length}
              time={this.quiz1.time}
            />
          ) : this.state.showResults ? (
            <QuizResults name={this.quiz1.quizName}
              result={this.state.userAnswers.length}
              count={this.quiz1.questions.length}
              tryAgain={this.tryAgain}
              info={this.quiz1}
              results={this.state.userAnswers}
            />
          ) : (
            <StartQuiz name={this.quiz1.quizName}
              description={this.quiz1.quizDescription}
              startQuiz={this.startQuiz} />
          )}
        </main>
        <Footer />
      </>
    )
  }
}
