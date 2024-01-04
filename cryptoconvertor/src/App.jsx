import { Routes, Route } from 'react-router-dom';
import Convertor from './Components/Convertor';
import ErrorNotFoundPage from './Components/ErrorNotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<ErrorNotFoundPage />} />
        <Route exact path='/' element={<Convertor />} />
      </Routes>
    </div>
  );
}

export default App;
