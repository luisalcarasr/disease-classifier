import axios from 'axios';
import React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form } from 'semantic-ui-react';

const BloodPressureForm = ({ onAdd = () => {} }) => {
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
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        event.target.reset();
      });
  };

  return (
    <Form onSubmit={addBloodPressure}>
      <Form.Group widths="equal">
        <Form.Input id="SysBP" name="SysBP" fluid placeholder="SysBP" type="number" />
        <Form.Input id="DiaBP" name="DiaBP" fluid placeholder="DiaBP" type="number" />
        <SemanticDatepicker id="atDate" name="atDate" format="YYYY/MM/DD"></SemanticDatepicker>
        <Button type="submit" primary>
          Add
        </Button>
      </Form.Group>
    </Form>
  );
};

export default BloodPressureForm;
