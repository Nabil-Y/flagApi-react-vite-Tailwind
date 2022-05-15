import Header from './Components/Layout/Header';
import HomePage from './Components/Page/HomePage/HomePage';
import CountryPage from './Components/Page/CountryPage/CountryPage';
import Error from './Components/UI/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/id/:countryId" element={<CountryPage />}></Route>
        <Route path="/" exact element={<HomePage />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
