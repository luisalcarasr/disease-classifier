import moment from 'moment';
import { useMemo } from 'react';
// import { Chart } from 'react-charts';
import { BloodPressure } from './BloodPressureLast';

interface Props {
  bloodPressures: BloodPressure[]
}

const BloodPressuresChart = ({ bloodPressures }: Props) => {
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
    </div>
  );
  // <Chart data={data} axes={axes} />
};

export default BloodPressuresChart;
