import Header from './Components/Layout/Header';
import HomePage from './Components/Page/HomePage';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1440px]">
        <HomePage />
      </main>
    </>
  );
}

export default App;
