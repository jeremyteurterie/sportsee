import PropTypes from 'prop-types';
import caloriesIcon from '../assets/energy.svg';
import lipidesIcon from '../assets/cheeseburger.svg';
import proteinesIcon from '../assets/chicken.svg';
import glucidesIcon from '../assets/apple.svg';
import styles from '../styles/NutritionCard.module.css';

/**
 * React component that displays a list of nutrition cards.
 *
 * @param {object} props - The component properties.
 * @param {object} props.data - The nutrition data to display.
 * @returns {array} An array of nutrition cards.
 */
const NutritionCard = ({ data }) => {
  return generateCards(data);
};

/**
 * Generates a list of nutrition cards.
 *
 * @param {object} data - The nutrition data to display.
 * @returns {array} An array of nutrition cards.
 */
function generateCards(data) {
  const nutritionCardList = [];
  for (const [key, value] of Object.entries(data)) {
    nutritionCardList.push(
      <figure className={styles.cards} key={key}>
        {generateNutritionInfo(key, value)}
      </figure>
    );
  }
  return nutritionCardList;
}

/**
 * Generates the nutrition information for a specific card.
 *
 * @param {string} key - The key of the nutrition information to display.
 * @param {string|number} value - The value of the nutrition information to display.
 * @returns {JSX.Element} The nutrition information as a JSX element.
 */
function generateNutritionInfo(key, value) {
  const nutritionInfo = {
    calorieCount: {
      imgSrc: caloriesIcon,
      label: 'KCal',
      name: 'Calories',
    },
    proteinCount: {
      imgSrc: proteinesIcon,
      label: 'g',
      name: 'Protéines',
    },
    carbohydrateCount: {
      imgSrc: glucidesIcon,
      label: 'g',
      name: 'Glucides',
    },
    lipidCount: {
      imgSrc: lipidesIcon,
      label: 'g',
      name: 'Lipides',
    },
  };

  if (key in nutritionInfo) {
    const { imgSrc, label, name } = nutritionInfo[key];
    return (
      <>
        <img alt="" src={imgSrc} />
        <figcaption>
          <b>
            {value}
            {label}
          </b>
          <br />
          {name}
        </figcaption>
      </>
    );
  }

  return null;
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
