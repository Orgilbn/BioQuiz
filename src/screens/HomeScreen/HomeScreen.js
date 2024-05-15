import React from "react";
import './HomeScreen.css';
import QuizPreview from "./components/QuizPreview";
// import Dnh from "./dnh.png";
import Dnh from '../../assets/dnh.png'
import Lonh from '../../assets/lonh.webp'
import { Link } from "react-router-dom";
import QuizPreviews from "../../data/demoData";


const HomeScreen = () => {
    // const previews = Array(20).fill(null);

    // console.log(QuizPreviews)



    return (
        <div className="main">
            

            <div className="main-content">
                <div className="top-wrapper">
                                <div className="header-sides-section">
                                    <img src={Lonh} alt="BioQuiz Logo" className="logo-image" />
                                </div>
                                <div className="header-wrapper">
                                    <h2 className="h2-style">👋Hi сайн уу! BioQuiz-д тавтай морил💚</h2>
                                    <p className="header-desc">Та манай вэбсайтыг ашиглан биологийн мэдлэгээ бататгах боломжтой</p>
                                </div>
                                <div className="header-sides-section">
                                    <img src={Dnh} alt="BioQuiz Logo" className="logo-image2" />
                                </div>
                            </div>

                            <div className="quizes">
                                {QuizPreviews.map(({key, title, description}) => (
                                <Link to={`/quiz/${key}`}> 
                                        <QuizPreview key={key} title={title} description={description} />
                                </Link>
                                ))}
                            </div>
                        </div> 
            </div>
    );
}

export default HomeScreen;

