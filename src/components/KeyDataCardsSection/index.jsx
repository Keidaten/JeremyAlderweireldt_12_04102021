//React
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Components
import KeyDataCard from '../KeyDataCard';

//Assets
import caloriesIcon from '../../assets/caloriesIcon.png';
import proteinIcon from '../../assets/proteinIcon.png';
import carbsIcon from '../../assets/carbsIcon.png';
import fatIcon from '../../assets/fatIcon.png';

/**
 * Component who build macronutriments cards list
 * @param {Object} user fetched user infos
 * @param {Object} user.keyData datas about macronutriments
 * @returns {Component} cards to display
 */
function KeyDataCardsSection({ user }) {
	return (
		<KeyDataContainer>
			<KeyDataCard src={caloriesIcon} alt="Icône flamme" data={user.keyData.calorieCount} type="Calories" measureUnit="kCal" />
			<KeyDataCard src={proteinIcon} alt="Icône poulet" data={user.keyData.proteinCount} type="Protéines" measureUnit="g" />
			<KeyDataCard src={carbsIcon} alt="Icône pomme" data={user.keyData.carbohydrateCount} type="Glucides" measureUnit="g" />
			<KeyDataCard src={fatIcon} alt="Icône bruger" data={user.keyData.lipidCount} type="Lipides" measureUnit="g" />
		</KeyDataContainer>
	);
}

//PropTypes
KeyDataCardsSection.propTypes = {
	user: PropTypes.object.isRequired,
};

//Component style
const KeyDataContainer = styled.ul`
	grid-area: foodCount;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: 1440px) {
		flex-direction: row;
	}
`;

export default KeyDataCardsSection;
