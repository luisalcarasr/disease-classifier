import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';
// import KidneyDiseaseCalculatorChart from './KidneyDiseaseCalculatorChart';
import KidneyDiseaseCalculatorForm from './KidneyDiseaseCalculatorForm';
import KidneyDiseaseCalculatorLast from './KidneyDiseaseCalculatorLast';
import KidneyDiseaseCalculatorTable from './KidneyDiseaseCalculatorTable';

const KidneyDiseaseCalculatorCard = () => {
  const [rates, setRates] = useState([]);
  const [lastRate, setLastRate] = useState({});

  const refresh = () => {
    axios.get('http://localhost:3001/e-gfr').then((response) => {
      setRates(response.data);
    });
    axios.get('http://localhost:3001/e-gfr/last').then((response) => {
      setLastRate(response.data);
    });
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Kidney Disease Calculator</Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <KidneyDiseaseCalculatorLast rate={lastRate}></KidneyDiseaseCalculatorLast>
            </Grid.Column>
            <Grid.Column>
              <KidneyDiseaseCalculatorForm onAdd={refresh}></KidneyDiseaseCalculatorForm>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <KidneyDiseaseCalculatorTable rates={rates} onDelete={refresh}></KidneyDiseaseCalculatorTable>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

// <KidneyDiseaseCalculatorChart rates={rates.reverse()}></KidneyDiseaseCalculatorChart>

export default KidneyDiseaseCalculatorCard;
