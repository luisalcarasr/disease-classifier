import axios from 'axios';
import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form } from 'semantic-ui-react';

const BloodPressureForm = ({ onAdd = () => {} }) => {
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState('');

  const addBloodPressure = (event) => {
    let bp = {};
    new FormData(event.target).forEach((value, key) => {
      bp[key] = value;
    });
    axios
      .post('http://localhost:3001/blood-pressures', bp)
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
    <Form onSubmit={addBloodPressure}>
      <Form.Group widths="equal">
        <Form.Input id="SysBP" error={errors?.SysBP} name="SysBP" fluid placeholder="SysBP" type="number" required />
        <Form.Input id="DiaBP" error={errors?.DiaBP} name="DiaBP" fluid placeholder="DiaBP" type="number" required />
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

export default BloodPressureForm;
