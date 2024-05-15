import React from "react";
import Logo from '../../../assets/logo.png'
import  {FacebookOutlined, InstagramOutlined, TwitterOutlined} from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
// import './QuizScreen.css';

const Layout = () =>{



    return(
        <div>
        <div className="logo-section-wrap">
                <div className="logo-section">
                    <img src={Logo} alt="BioQuiz Logo" className="logo-image0" />
                    <p className="logo-text">BioQuiz</p>
                    <p className="logo-text2">product of Etugen</p>
                </div>
                <div className="common-wrap widthHha">
                    <div className="common-wrap" style={{width: 400}}>
                        <div className="common-wrap" style={{width: 200}}>
                            <Link 
                                to="/" 
                                className="normal-bold-text">
                                    Нүүр
                            </Link>
                            {/* <Link to="/quiz" className="normal-bold-text">Quiz</Link> */}
                            <Link to="/contact" className="normal-bold-text">Бидний тухай</Link>
                        </div>
                        <div className="social-icons">
                        <FacebookOutlined style={{ fontSize: '24px', color: '#1A4D2E' }}/>
                        <InstagramOutlined style={{ fontSize: '24px', color: '#1A4D2E', paddingLeft: 16 }}/>
                        <TwitterOutlined style={{ fontSize: '24px', color: '#1A4D2E' , paddingLeft: 16}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
            </div>
    )
}

export default Layout;