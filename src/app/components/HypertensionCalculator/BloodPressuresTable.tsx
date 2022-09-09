import axios from 'axios';
import { Button, Table } from 'semantic-ui-react';
import { BloodPressure } from './BloodPressureLast';

interface Props {
  bloodPressures: BloodPressure[];
  onDelete: (bp: BloodPressure) => void;
}

function BloodPressureTable({ bloodPressures, onDelete }: Props) {
  const deleteBloodPressure = (bp: BloodPressure) => {
    axios.delete('http://localhost:3001/blood-pressures', { params: bp }).then(() => {
      onDelete(bp);
    });
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SysBP</Table.HeaderCell>
            <Table.HeaderCell>DiaBP</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bloodPressures.map((bp, index) => (
            <Table.Row key={index}>
              <Table.Cell>{bp.SysBP}</Table.Cell>
              <Table.Cell>{bp.DiaBP}</Table.Cell>
              <Table.Cell>{bp.atDate}</Table.Cell>
              <Table.Cell textAlign="center">
                <Button color="red" icon="trash" onClick={() => deleteBloodPressure(bp)}></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <span>{bloodPressures.length} records stored.</span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default BloodPressureTable;
