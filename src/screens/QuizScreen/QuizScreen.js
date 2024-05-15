import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './QuizScreen.css';
import QuizPreviews from "../../data/demoData";
import two from "../../data/second";

const QuizScreen = () => {
    const { key } = useParams();
    const quizKey = parseInt(key, 10); // Convert the key from the URL to a number
    const quiz = QuizPreviews.find(quiz => quiz.key === quizKey);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    useEffect(() => {
        if (showScore) {
            setSelectedAnswer(null); // Reset selected answer when showing score
        }
    }, [showScore]);

    const handleAnswerOptionClick = (isCorrect, index) => {
        setSelectedAnswer(index);
        setShowCorrectAnswer(!isCorrect); // Show correct answer only if it's incorrect
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < two.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null); // Reset selected answer
            setShowCorrectAnswer(false); // Hide correct answer for the next question
        } else {
            setShowScore(true);
        }
    }

    const handleRestartButtonClick = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
    }

    if (!quiz) {
        return <p>Quiz not found</p>; // Handle the case where the quiz is not found
    }

    return (
        <div className="bigboi">
            <h1>{quiz.title}</h1>

            <div className="">
                <div className='quiz-screen-wrapper'>
                    {showScore ? (
                        <div className='score-section'>
                            <p>You scored {score} out of {two.length}</p>
                            <button className="restart-button" onClick={handleRestartButtonClick}>Restart</button>
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{two.length}
                                </div>
                                <div className='question-text'>{two[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {two[currentQuestion].answerOptions.map((answerOption, index) => (
                                    <div key={index} className="answer-option">
                                        <button 
                                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                                            className={
                                                selectedAnswer === index 
                                                ? (answerOption.isCorrect ? "correct selected" : "incorrect selected") 
                                                : ""
                                            }
                                            disabled={selectedAnswer !== null}
                                        >
                                            {answerOption.answerText}
                                        </button>
                                        {showCorrectAnswer && answerOption.isCorrect && (
                                            <span className="correct-answer">Correct</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {selectedAnswer !== null && (
                                <button className="next-button" onClick={handleNextButtonClick}>Next</button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizScreen;
