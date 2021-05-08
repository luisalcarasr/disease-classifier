import React from 'react';
import { Message } from 'semantic-ui-react';

const BloodPressuresLast = ({ bloodPressure }) => {
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
