import React from 'react';
import { Message } from 'semantic-ui-react';

const KidneyDiseaseCalculatorLast = ({ rate }) => {
  return (
    <Message>
      <Message.Header>Last Blood Pressure</Message.Header>
      <Message.List>
        <Message.Item>
          <b>DiaBP:</b> {rate.eGFR}
        </Message.Item>
        <Message.Item>
          <b>Classification:</b> {rate.classification}
        </Message.Item>
      </Message.List>
    </Message>
  );
};

export default KidneyDiseaseCalculatorLast;
