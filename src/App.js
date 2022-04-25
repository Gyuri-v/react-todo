import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import './css/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
