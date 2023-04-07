import PropTypes from 'prop-types';

import caloriesIcon from '../assets/energy.svg';
import lipidesIcon from '../assets/cheeseburger.svg';
import proteinesIcon from '../assets/chicken.svg';
import glucidesIcon from '../assets/apple.svg';

import styles from '../styles/NutritionCard.module.css';

/**
 * A component that generates nutrition cards.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The nutrition data.
 * @returns {JSX.Element[]} An array of React elements that display the nutrition cards.
 */
const NutritionCard = ({ data }) => {
  return generateCards(data);
};

/**
 * Generates nutrition cards from the given data.
 *
 * @param {Object} data - The nutrition data.
 * @returns {JSX.Element[]} An array of React elements that display the nutrition cards.
 */
function generateCards(data) {
  const nutritionCardList = [];
  for (const [key, value] of Object.entries(data)) {
    nutritionCardList.push(
      <figure className={styles.cards} key={key}>
        {mapKeyValue(key, value)}
      </figure>
    );
  }
  return nutritionCardList;
}

/**
 * Maps a nutrition data key-value pair to a React element.
 *
 * @param {string} key - The nutrition data key.
 * @param {number} value - The nutrition data value.
 * @returns {JSX.Element} A React element that displays the nutrition data.
 */
function mapKeyValue(key, value) {
  switch (key) {
    case 'calorieCount':
      return (
        <>
          <img alt="" src={caloriesIcon} />
          <figcaption>
            <b>{value}KCal</b>
            <br />
            Calories
          </figcaption>
        </>
      );
    case 'proteinCount':
      return (
        <>
          <img alt="" src={proteinesIcon} />
          <figcaption>
            <b>{value}g</b>
            <br />
            Proteines
          </figcaption>
        </>
      );
    case 'carbohydrateCount':
      return (
        <>
          <img alt="" src={glucidesIcon} />
          <figcaption>
            <b>{value}g</b>
            <br />
            Glucides
          </figcaption>
        </>
      );
    case 'lipidCount':
      return (
        <>
          <img alt="" src={lipidesIcon} />
          <figcaption>
            <b>{value}g</b>
            <br />
            Lipides
          </figcaption>
        </>
      );
    default:
      break;
  }
}

NutritionCard.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default NutritionCard;
