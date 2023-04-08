import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../styles/PerformanceChart.module.css';

const PerformanceChart = ({ performanceData }) => {
  function convertPerformanceNumber(performanceData) {
    const performanceMapping = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    };
    return performanceMapping[performanceData] || null;
  }

  return (
    <ResponsiveContainer
      className={styles.performancechart}
      minWidth={230}
      maxHeight={260}
      width="30%"
      height="fit-content"
      aspect={1}
    >
      <RadarChart data={[...performanceData].reverse()} outerRadius={80}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: 12 }}
          stroke="#FFFFFF"
          tickFormatter={convertPerformanceNumber}
        />
        <Radar dataKey="value" fill="#FF0101B2" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

PerformanceChart.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceChart;
