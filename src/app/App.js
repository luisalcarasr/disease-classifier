import './App.css';
import BloodPressuresCard from './components/HypertensionCalculator/BloodPressureCard';
import KidneyDiseaseCalculatorCard from './components/KidneyDiseaseCalculator/KidneyDiseaseCalculatorCard';

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
        <KidneyDiseaseCalculatorCard></KidneyDiseaseCalculatorCard>
      </div>
    </div>
  );
}

export default App;
