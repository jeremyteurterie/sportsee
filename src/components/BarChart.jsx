import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../styles/BarChart.module.css';

/**
 * This component displays a daily activity chart with two Y-axes representing weight (kilograms) and burned calories (kcal) over the course of the week.
 * @param {Object} props - The props object for this component.
 * @param {Array} props.dailyData - An array of daily data objects, each containing a 'day' (string), 'kilogram' (number), and 'calories' (number) property.
 * @returns {JSX.Element} - A JSX element representing the daily activity chart.
 */
const DailyActivityChart = ({ dailyData }) => {
  /**
   * This function returns the JSX for the tooltip displayed when hovering over a data point in the chart.
   * @param {Object} props - The props object for this function.
   * @param {Array} props.payload - An array of payload data for the hovered data point.
   * @param {boolean} props.active - A boolean value representing whether the tooltip is currently active.
   * @returns {JSX.Element|null} - A JSX element representing the tooltip if active, otherwise null.
   */
  function ActivityToolTip(props) {
    const { payload, active } = props;
    if (active) {
      return (
        <div className="daily-tooltip">
          <div>{payload[0].value}kg</div>
          <div>{payload[1].value}Kcal</div>
        </div>
      );
    } else {
      return null;
    }
  }

  /**
   * This function returns a JSX element representing a legend item with a colorless label.
   * @param {string} value - The label text for the legend item.
   * @returns {JSX.Element} - A JSX element representing the legend item.
   */
  function ColorlessLegend(value) {
    return <span style={{ color: '#74798C' }}>{value}</span>;
  }

  return (
    <div className={styles.maingraph}>
      <span className={styles.maingraphtitle}>Activité Quotidienne</span>
      <ResponsiveContainer
        width="100%"
        maxHeight={250}
        height="fitcontent"
        aspect={3}
        background-color="#FBFBFB"
      >
        <BarChart data={dailyData} barGap={8} barCategoryGap={1}>
          <Legend
            formatter={ColorlessLegend}
            iconType="circle"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ marginTop: '-45px' }}
          />
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, stroke: '#9B9EAC' }}
            dy={15}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="3"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14, stroke: '#9B9EAC' }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={['dataMin - 20', 'dataMax + 10']}
            hide={true}
          />
          <Tooltip
            wrapperStyle={{ outline: 'none' }}
            content={<ActivityToolTip />}
          />
          <Bar
            yAxisId="kilogram"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

DailyActivityChart.propTypes = {
  dailyData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DailyActivityChart;
