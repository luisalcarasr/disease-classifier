import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import BloodPressureForm from './BloodPressureForm';
import BloodPressuresLast from './BloodPressureLast';
import BloodPressureChart from './BloodPressuresChart';
import BloodPressureTable from './BloodPressuresTable';

const BloodPressuresCard = () => {
  const [bloodPressures, setBloodPressures] = useState([]);
  const [lastBloodPressure, setLastBloodPressure] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3001/blood-pressures').then((response) => {
      setBloodPressures(response.data);
    });
    axios.get('http://localhost:3001/blood-pressures/last').then((response) => {
      setLastBloodPressure(response.data);
    });
  }, []);
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Hypertension Calculator</Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <BloodPressuresLast bloodPressure={lastBloodPressure}></BloodPressuresLast>
            </Grid.Column>
            <Grid.Column>
              <BloodPressureForm></BloodPressureForm>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <BloodPressureTable bloodPressures={bloodPressures}></BloodPressureTable>
            </Grid.Column>
            <Grid.Column>
              <BloodPressureChart bloodPressures={bloodPressures.reverse()}></BloodPressureChart>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default BloodPressuresCard;
