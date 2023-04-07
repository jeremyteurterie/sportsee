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
 * A component that renders a line chart showing the average session duration for each day of the week.
 * @param {object} props - The props object.
 * @param {array} props.durationData - An array of objects containing data for each day of the week, with each object containing a "day" property (number from 1-7) and a "sessionLength" property (number).
 * @returns {JSX.Element} - The rendered line chart component.
 */
const DurationChart = ({ durationData }) => {
  /**
   * Converts a day number from 1-7 to a corresponding day letter abbreviation.
   * @param {number} day - The day number (1-7).
   * @returns {string} - The corresponding day letter abbreviation (e.g. "L" for Monday in French).
   */
  function convertDayNumberToDayLetter(day) {
    switch (day) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';
      default:
        return '';
    }
  }

  /**
   * A custom tooltip component that shows the session duration for the hovered data point.
   * @param {object} props - The props object.
   * @param {array} props.payload - An array of objects containing the data for the hovered data point.
   * @param {boolean} props.active - Whether the tooltip is currently active (hovered over).
   * @returns {JSX.Element} - The rendered tooltip component.
   */
  const TooltipGenerator = ({ payload, active }) => {
    if (active) {
      return (
        <div className={styles.durationtooltip}>
          <div>{payload[0].value}min</div>
        </div>
      );
    }
  };

  /**
   * A component that renders the chart title.
   * @returns {JSX.Element} - The rendered chart title component.
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
          tickFormatter={convertDayNumberToDayLetter}
          stroke="rgba(255, 255, 255, 0.5)"
          tickMargin={35}
        />
        <YAxis hide="true" domain={[]} />
        <Tooltip
          wrapperStyle={{ outline: 'none' }}
          content={<TooltipGenerator />}
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

DurationChart.propTypes = {
  durationData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DurationChart;
