import './App.css';
import NewsPage from './pages/NewsPage';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route path = "/:category?" element={<NewsPage />}></Route>
      </Routes>
  )
}

export default App;
