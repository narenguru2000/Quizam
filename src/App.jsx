import { HomePage } from './pages/HomePage';
import { GenerateQuestions } from './pages/GenerateQuestions';
import { Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/generate" element={<GenerateQuestions />}></Route>
      </Routes>
    </div>
  );
}

export default App;
