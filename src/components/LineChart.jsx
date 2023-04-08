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

const SessionsDurationChart = ({ durationData }) => {
  function dayNumberToLetter(day) {
    const dayLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    if (day < 1 || day > 7) {
      return '';
    }
    return dayLetters[day - 1];
  }

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
