import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import PropTypes from 'prop-types';
import styles from '../styles/ScoreChart.module.css';

function ScoreChart({ scoreData }) {
  const percentScore = [{ value: scoreData }, { value: 1 - scoreData }];
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
