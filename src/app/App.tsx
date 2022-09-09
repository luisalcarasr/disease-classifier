import { ReactElement } from 'react';
import './App.css';
import BloodPressuresCard from './components/HypertensionCalculator/BloodPressureCard';
import KidneyDiseaseCalculatorCard from './components/KidneyDiseaseCalculator/KidneyDiseaseCalculatorCard';

const App = (): ReactElement => {
  return (
    <div id="app">
      <header>
        <nav>
          <h1>Disease Classifier</h1>
        </nav>
      </header>
      <div id="main-container">
        <BloodPressuresCard />
        <KidneyDiseaseCalculatorCard />
      </div>
    </div>
  );
}

export default App;
