import axios from 'axios';
import { Button, Table } from 'semantic-ui-react';

function KidneyDiseaseCalculatorTable({ rates, onDelete }) {
  const deleteRate = (rate) => {
    axios.delete('http://localhost:3001/e-gfr', { params: rate }).then(() => {
      onDelete(rate);
    });
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>eGFR</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rates.map((rate, index) => (
            <Table.Row key={index}>
              <Table.Cell>{rate.eGFR}</Table.Cell>
              <Table.Cell>{rate.atDate}</Table.Cell>
              <Table.Cell textAlign="center">
                <Button color="red" icon="trash" onClick={() => deleteRate(rate)}></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <span>{rates.length} records stored.</span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default KidneyDiseaseCalculatorTable;
