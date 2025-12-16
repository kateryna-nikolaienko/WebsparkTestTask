import './App.css';
import BackgroundDecor from './components/BackgroundDecor/BackgroundDecor';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="page">
      <BackgroundDecor variant="top" />

      <Header />
      <Feed />
      
      <BackgroundDecor variant="bottom" />
    </div>
  );
}

export default App;
