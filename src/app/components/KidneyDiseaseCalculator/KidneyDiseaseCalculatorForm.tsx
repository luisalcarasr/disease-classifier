import axios from 'axios';
import { FormEvent, useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Button, Form } from 'semantic-ui-react';

interface Errors {
  DiaBP?: string;
  eGFR?: string;
  atDate?: string;
}

const KidneyDiseaseCalculatorForm = ({ onAdd = (_: any) => {} }) => {
  const [errors, setErrors] = useState<Errors>({});
  const [date, setDate] = useState<Date>();

  const addRate = (event: FormEvent) => {
    let rate: any = {};
    if (event.target instanceof HTMLFormElement) {
      new FormData(event.target).forEach((value, key) => {
        rate[key] = value;
      });
    }
    axios
      .post('http://localhost:3001/e-gfr', rate)
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
