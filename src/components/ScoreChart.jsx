import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import PropTypes from 'prop-types';
import styles from '../styles/ScoreChart.module.css';

/**
 * React functional component that renders a score chart using the Recharts library.
 *
 * @param {Object} props - The component props.
 * @param {number} props.scoreData - The score data to render.
 * @returns {JSX.Element} - The rendered component.
 */
function ScoreChart({ scoreData }) {
  /**
   * Formats the score data for use in a pie chart.
   *
   * @type {Array} - The formatted data.
   */
  const percentScore = [{ value: scoreData }, { value: 1 - scoreData }];

  /**
   * Component that renders the legend for the score chart.
   *
   * @returns {JSX.Element} - The rendered legend.
   */
  const ScoreChartLegend = () => {
    return (
      <>
        <span className={styles.scoregraphtitle}>Score</span>
        <div className={styles.scorechartlegend}>
          <span className={styles.scorepercent}>{scoreData * 100}%</span>
          <br />
          de votre
          <br />
          objectif
        </div>
      </>
    );
  };

  return (
    <ResponsiveContainer
      className={styles.scorechart}
      width="30%"
      height="fit-content"
      minWidth={230}
      maxHeight={260}
      aspect={1}
    >
      <PieChart>
        <Legend
          layout="horizontal"
          verticalAlign="center"
          align="center"
          wrapperStyle={{ top: '50%', transform: 'translateY(-50%)' }}
          content={<ScoreChartLegend />}
        />
        <Pie
          data={percentScore}
          dataKey="value"
          innerRadius={70}
          outerRadius={82}
          startAngle={90}
        >
          {percentScore.map((entry, index) =>
            index === 0 ? (
              <Cell
                key={'cell-' + { index }}
                cornerRadius={10}
                fill="#ff0000"
              />
            ) : (
              <Cell key={'cell-' + { index }} fill="#ffffff" />
            )
          )}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

ScoreChart.propTypes = {
  scoreData: PropTypes.number.isRequired,
};

export default ScoreChart;
