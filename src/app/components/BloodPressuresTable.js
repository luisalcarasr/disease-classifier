import { Table } from 'semantic-ui-react';

function BloodPressureTable({ bloodPressures }) {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SysBP</Table.HeaderCell>
            <Table.HeaderCell>DiaBP</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bloodPressures.map((bp, index) => (
            <Table.Row key={index}>
              <Table.Cell>{bp.SysBP}</Table.Cell>
              <Table.Cell>{bp.DiaBP}</Table.Cell>
              <Table.Cell>{bp.atDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <span>{bloodPressures.length} records stored.</span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default BloodPressureTable;
