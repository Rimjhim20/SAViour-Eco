import React, { useState } from 'react';
import questions  from './components/Questions';
import {Link } from 'react-router-dom'
export default function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div class="wrap">
			<h1>Quiz on Safety during Disaster </h1>
	
		<div className='app'>
			
			{showScore ? (
                <>
				<div className='score-section d-flex flex-column m-auto'>
                    <div>Congratulations🎉🎉 You scored {score} out of {questions.length}</div>
					<br/>
                   <div><button type="button" class="btn btn-dark"><Link to="/safety" className='text-white text-decoration-none'>For more safety tips</Link></button></div> 
				</div>
                </>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button  className='quizbtn'  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}