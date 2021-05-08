import axios from 'axios';
import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form } from 'semantic-ui-react';

const KidneyDiseaseCalculatorForm = ({ onAdd = () => {} }) => {
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState('');

  const addRate = (event) => {
    let rate = {};
    new FormData(event.target).forEach((value, key) => {
      rate[key] = value;
    });
    axios
      .post('http://localhost:3001/e-gfr', rate)
      .then((response) => {
        onAdd(response.data);
      })
      .catch((err) => {
        const mistakes = {};
        for (const key in err.response.data) {
          mistakes[key] = err.response.data[key].pop();
        }
        setErrors(mistakes);
      })
      .finally(() => {
        event.target.reset();
        setDate('');
        setDate(undefined);
      });
  };

  return (
    <Form onSubmit={addRate}>
      <Form.Group widths="equal">
        <Form.Input id="eGFR" error={errors?.eGFR} name="eGFR" fluid placeholder="eGFR" type="number" required />
        <SemanticDatepicker
          required
          autoComplete="off"
          id="atDate"
          error={errors?.atDate}
          name="atDate"
          format="YYYY/MM/DD"
          value={date}
        ></SemanticDatepicker>
        <Button type="submit" primary>
          Add
        </Button>
      </Form.Group>
    </Form>
  );
};

export default KidneyDiseaseCalculatorForm;
