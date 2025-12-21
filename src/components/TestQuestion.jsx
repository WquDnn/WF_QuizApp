import React, { Component } from 'react';
import style from "../styles/components/TestQuestion.module.scss"

export default class TestQuestion extends Component {

    constructor(props){
        super(props)
        this.state = {
            userAnswers: [],
            time: props.time
        }
        this.addAnswer = this.addAnswer.bind(this)
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState((prev)=>({...prev, time: prev.time - 1})) 
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    addAnswer(e){
  this.setState((prev)=>{
    prev.userAnswers[this.props.questionId - 1] = e.target.value;
    return prev 

  })
}

componentDidUpdate(prevProps){
    if(prevProps.questionId !== this.props.questionId){
        document.querySelectorAll(".answers").forEach(input=>{
            input.checked = this.state.userAnswers[this.props.questionId - 1] === input.value
        })
    }

}

    render() {
        return (
            <div className={style.question + " card"}>
                <h2 className="card-header">
                    Question #{this.props.questionId}: {this.props.questionText}

                </h2>
                <progress max={this.props.count} value={this.state.userAnswers.length}
                style={{width: "100%"}}
                />
                <ul className="card-body">
                    <p className={style.time}>Time: {this.state.time}s</p>
                    {this.props.answers.map((a, i) => (
                        <li key={i}>
                            <input 
                            className="answers"
                            type="radio"
                             id={"answer1" + i} 
                             name='answer'
                              value={a}
                              onChange={this.addAnswer}
                               />
                            <label htmlFor={"answer1" + i}>{a}</label>
                        </li>

                    ))}

                </ul>
                <div className={style.bdns}>
                 <button onClick={()=>this.props.prev()} disabled={this.props.questionId == 1}>PREVIOUS</button>
                <button onClick={()=>this.props.next()} disabled={this.props.questionId == this.props.count}>NEXT</button>
            </div>
            <button onClick={()=>this.props.stop()}>Stop Quiz</button>
            </div>
        )
    }
}
