import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer) {
            this.setState({incorrectAnswer: false});
            this.props.showNextQuestionHandler();
        }
        else {
            this.setState({incorrectAnswer: true});
        }
    }

    render() {
        return (
        <main>
            <section>
            <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
            <ul>
                {this.props.quiz_question.answer_options.map((option,index) => 
                <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={option}/>)}
            </ul>
            </section>
            {this.state.incorrectAnswer
            ? <div className='error'>Sorry, that's not right</div>
            : null}
        </main>
        )
    }

}

export default QuizQuestion;