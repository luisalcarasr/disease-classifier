import moment from 'moment';
import React, { useMemo } from 'react';
import { Chart } from 'react-charts';

const BloodPressuresChart = ({ bloodPressures }) => {
  const data = useMemo(
    () => [
      {
        label: 'SysBP',
        data: bloodPressures.map((bp) => [moment(bp.atDate, 'YYYY MM DD').utc(), bp.SysBP]),
      },
      {
        label: 'DiaBP',
        data: bloodPressures.map((bp) => [moment(bp.atDate, 'YYYY MM DD').utc(), bp.DiaBP]),
      },
    ],
    [bloodPressures]
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

export default BloodPressuresChart;
