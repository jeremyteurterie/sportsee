import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../styles/PerformanceChart.module.css';

/**
 * PerformanceChart component that displays performance data as a radar chart.
 * @param {Object} props - The props object containing performance data.
 * @param {Array} props.performanceData - An array of objects containing the performance data to be displayed.
 * @returns {JSX.Element} - The PerformanceChart component UI.
 */
const PerformanceChart = ({ performanceData }) => {
  /**
   * Converts performance number to performance type string.
   * @function
   * @param {number} performanceData - The number representing the performance type.
   * @returns {string|null} - The performance type string or null if the performanceData parameter is invalid.
   */
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
