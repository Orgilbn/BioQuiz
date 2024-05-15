import React from "react";
import './QuizPreview.css';

const QuizPreview = ({key, title, description}) => {
    return (
        <div className="previewWrapper">
            <div>
                <div className="image-container"></div>
                <div className="hi">
                    <p className="quiz-title">{key}{title}</p>
                    <p className="quiz-desc">{description}</p>
                </div>
                
            </div>
        </div>
        
    );
}

export default QuizPreview;