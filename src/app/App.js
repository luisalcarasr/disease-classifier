import './App.css';
import BloodPressuresCard from './components/BloodPressureCard';

function App() {
  return (
    <div id="app">
      <header>
        <nav>
          <h1>Auxita - Disease Classifier (Code Challenge)</h1>
        </nav>
      </header>
      <div id="main-container">
        <BloodPressuresCard></BloodPressuresCard>
      </div>
    </div>
  );
}

export default App;
