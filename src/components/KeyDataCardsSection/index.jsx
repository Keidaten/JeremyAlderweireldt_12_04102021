//React
import styled from 'styled-components';

//Components
import KeyDataCard from '../KeyDataCard';

//Assets
import caloriesIcon from '../../assets/caloriesIcon.png';
import proteinIcon from '../../assets/proteinIcon.png';
import carbsIcon from '../../assets/carbsIcon.png';
import fatIcon from '../../assets/fatIcon.png';

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

const KeyDataContainer = styled.section`
	grid-area: foodCount;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: 1440px) {
		flex-direction: row;
	}
`;

export default KeyDataCardsSection;