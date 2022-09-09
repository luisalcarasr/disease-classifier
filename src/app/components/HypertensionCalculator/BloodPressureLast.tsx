import { Message } from 'semantic-ui-react';

export interface BloodPressure {
  SysBP: string
  DiaBP: string
  classification: string
  atDate: string
}

interface Props {
  bloodPressure: BloodPressure 
}

const BloodPressuresLast = ({ bloodPressure }: Props) => {
  return (
    <Message>
      <Message.Header>Latest reading</Message.Header>
      <Message.List>
        <Message.Item>
          <b>SysBP:</b> {bloodPressure.SysBP}
        </Message.Item>
        <Message.Item>
          <b>DiaBP:</b> {bloodPressure.DiaBP}
        </Message.Item>
        <Message.Item>
          <b>Classification:</b> {bloodPressure.classification}
        </Message.Item>
      </Message.List>
    </Message>
  );
};

export default BloodPressuresLast;
