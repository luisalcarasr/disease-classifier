import axios from 'axios';
import { FormEvent, useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form, FormProps } from 'semantic-ui-react';

interface Response {

}

interface Errors {
  DiaBP?: string;
  SysBP?: string;
  atDate?: string;
}

const BloodPressureForm = ({ onAdd = (a: any) => {} }) => {
  const [errors, setErrors] = useState<Errors>({});
  const [date, setDate] = useState<Date>();

  const addBloodPressure = (event: FormEvent, data: FormProps) => {
    let bp: any = {};
    if (event.target instanceof HTMLFormElement) {
      new FormData(event.target).forEach((value, key) => {
        bp[key] = value;
      });
    }
    axios
      .post('http://localhost:3001/blood-pressures', bp)
      .then((response) => {
        onAdd(response.data);
      })
      .catch((err) => {
        const mistakes: any = {};
        for (const key in err.response.data) {
          mistakes[key] = err.response.data[key].pop();
        }
        setErrors(mistakes);
      })
      .finally(() => {
        if (event.target instanceof HTMLFormElement) {
          event.target.reset();
        }
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
