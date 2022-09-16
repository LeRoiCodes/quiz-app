import React, {useState} from 'react';
import QuestionList from "../data/kwangaquestions.json";
import Question from './Question';
import QuizResult from './QuizResult';

function QuizScreen({retry}) {
    const [currentQuestionIndex, setCurrentQuestionIndex]  = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calcuateResult() {
        let correct = 0;
        QuestionList.forEach((question, index) => {
            if (question.correctOptionIndex === markedAnswers[index]){
                correct ++;
            }
        });
        return {
            total: QuestionList.length-1,
            correct: correct,
            percentage: Math.trunc((correct / (QuestionList.length-1)) * 100)
        };
    }

    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <QuizResult
                    result = {calcuateResult()}
                    retry = {retry}
                     />
                ) : (
                    <Question
                        question ={QuestionList[currentQuestionIndex]}
                        totalQuestions={QuestionList.length-1}
                        currentQuestion = {currentQuestionIndex}
                        setAnswer = {(index) => {
                            setMarkedAnswers((arr) => {
                                let newArr = [...arr];
                                newArr[currentQuestionIndex] = index;
                                return newArr;

                            });
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}
                    />
                )
            }
            
        </div>
    );
}

export default QuizScreen;

