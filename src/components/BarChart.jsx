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
 * A bar chart that displays daily data for weight and calories burned.
 * @param {Object} props - The component props.
 * @param {Array} props.dailyData - An array of objects representing daily data.
 * @returns {JSX.Element} - A React component for the daily chart.
 */
const DailyChart = ({ dailyData }) => {
  /**
   * A custom tooltip component for the daily chart.
   * @param {Object} payload - The payload of the active tooltip item.
   * @param {boolean} active - Whether the tooltip is active.
   * @returns {JSX.Element} - A React component for the tooltip.
   */
  const TooltipGenerator = ({ payload, active }) => {
    if (active) {
      return (
        <div className="daily-tooltip">
          <div>{payload[0].value}kg</div>
          <div>{payload[1].value}Kcal</div>
        </div>
      );
    }
  };

  /**
   * A function that generates a legend with a gray text color.
   * @param {string} value - The text to display in the legend.
   * @returns {JSX.Element} - A React component for the legend.
   */
  const GenerateLegendWithoutTextColor = (value) => {
    return <span style={{ color: '#74798C' }}>{value}</span>;
  };

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
            formatter={GenerateLegendWithoutTextColor}
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
            content={<TooltipGenerator />}
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

DailyChart.propTypes = {
  dailyData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DailyChart;
