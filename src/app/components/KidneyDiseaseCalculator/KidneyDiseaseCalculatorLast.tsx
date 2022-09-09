import { Message } from 'semantic-ui-react';
import { Rate } from './KidneyDiseaseCalculatorChart';

interface Props {
  rate: Rate
}

const KidneyDiseaseCalculatorLast = ({ rate }: Props) => {
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
