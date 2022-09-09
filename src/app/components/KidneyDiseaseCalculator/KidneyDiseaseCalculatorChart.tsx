import moment from 'moment';
import { useMemo } from 'react';

export interface Rate {
  eGFR: string
  atDate: string
  classification: string
  drop: number
}

interface Props {
  rates: Rate[]
}

const KidneyDiseaseCalculatorChart = ({ rates }: Props) => {
  const data = useMemo(
    () => [
      {
        label: 'eGFR',
        data: rates.map((rate) => [moment(rate.atDate, 'YYYY MM DD').utc(), rate.eGFR]),
      },
    ],
    [rates]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'utc', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div style={{ height: '100%' }}>
    </div>
  );
  // <Chart data={data} axes={axes} />
};

export default KidneyDiseaseCalculatorChart;
