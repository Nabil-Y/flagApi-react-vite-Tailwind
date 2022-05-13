import Header from './Components/Layout/Header';
import HomePage from './Components/Page/HomePage';
import Error from './Components/UI/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
