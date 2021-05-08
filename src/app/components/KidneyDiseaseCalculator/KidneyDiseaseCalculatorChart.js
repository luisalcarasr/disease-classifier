import moment from 'moment';
import React, { useMemo } from 'react';
import { Chart } from 'react-charts';

const KidneyDiseaseCalculatorChart = ({ rates }) => {
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
      <Chart data={data} axes={axes} />
    </div>
  );
};

export default KidneyDiseaseCalculatorChart;
