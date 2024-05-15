import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizScreen from './screens/QuizScreen/QuizScreen.js';
import Layout from './screens/HomeScreen/components/Header.js';
import NoPage from './screens/HomeScreen/components/NoPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="quiz/:key" element={<QuizScreen />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App; 
