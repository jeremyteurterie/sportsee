import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../styles/LineChart.module.css';

/**
 * A component that renders a line chart of average session durations by day of the week
 *
 * @component
 * @param {object} props - The props object
 * @param {Array} props.durationData - An array of objects representing the data for the chart
 * @returns {JSX.Element} - A React component
 */
const SessionsDurationChart = ({ durationData }) => {
  /**
   * A helper function that returns the letter representation of the given day number
   *
   * @function
   * @param {number} day - The day number (1-7)
   * @returns {string} - The letter representation of the day (M, Tu, W, Th, F, Sa, Su)
   */
  function dayNumberToLetter(day) {
    const dayLetters = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];
    if (day < 1 || day > 7) {
      return '';
    }
    return dayLetters[day - 1];
  }

  /**
   * A custom tooltip component for the chart
   *
   * @function
   * @param {object} props - The props object
   * @param {object[]} props.payload - An array of data objects for the active tooltip label
   * @param {boolean} props.active - A boolean indicating whether the tooltip is active or not
   * @returns {JSX.Element} - A React component
   */
  const DurationToolTip = (props) => {
    const { payload, active } = props;
    if (active) {
      return (
        <div className={styles.durationtooltip}>
          <div>{payload[0].value}min</div>
        </div>
      );
    }
  };

  /**
   * A custom title component for the chart
   *
   * @function
   * @returns {JSX.Element} - A React component
   */
  const DurationChartTitle = () => {
    return (
      <>
        <p className={styles.durationcharttitle}>Durée moyenne des</p>
        <p className={styles.durationcharttitle}>sessions</p>
      </>
    );
  };

  return (
    <ResponsiveContainer
      className={styles.durationchart}
      maxHeight={260}
      minWidth={230}
      width="30%"
      height="fit-content"
      aspect={1}
    >
      <LineChart
        data={durationData}
        margin={{ top: 80, right: 10, left: 10, bottom: 40 }}
      >
        <Legend
          layout=""
          verticalAlign="top"
          align="left"
          wrapperStyle={{ marginTop: '-45px' }}
          content={<DurationChartTitle />}
        />
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          type="category"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
          tickFormatter={dayNumberToLetter}
          stroke="rgba(255, 255, 255, 0.5)"
          tickMargin={35}
        />
        <YAxis hide="true" domain={[]} />
        <Tooltip
          wrapperStyle={{ outline: 'none' }}
          content={<DurationToolTip />}
          cursor={false}
        />
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

SessionsDurationChart.propTypes = {
  durationData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SessionsDurationChart;
