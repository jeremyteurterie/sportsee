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
 * React functional component that renders a performance chart using the Recharts library.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.performanceData - An array of objects containing performance data.
 * @returns {JSX.Element} - The rendered component.
 */
const PerformanceChart = ({ performanceData }) => {
  /**
   * Converts a performance number to a performance string.
   *
   * @param {number} performanceData - The performance number to convert.
   * @returns {string|null} - The corresponding performance string, or null if no match is found.
   */
  function convertPerfNumberToPerfString(performanceData) {
    switch (performanceData) {
      case 1:
        return 'Cardio';
      case 2:
        return 'Energie';
      case 3:
        return 'Endurance';
      case 4:
        return 'Force';
      case 5:
        return 'Vitesse';
      case 6:
        return 'Intensité';
      default:
        return null;
    }
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
          tickFormatter={convertPerfNumberToPerfString}
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
