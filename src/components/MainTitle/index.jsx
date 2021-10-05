//React
import styled from 'styled-components';

//Styles
import colors from '../../styles/Colors';

const Title = styled.div`
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}
	p {
		font-size: 1.125rem;
	}
`;

const Name = styled.span`
	color: ${colors.mainTitleName};
`;

function MainTitle() {
	return (
		<Title>
			<h1>
				Bonjour <Name>Thomas</Name>
			</h1>
			<p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
		</Title>
	);
}

export default MainTitle;
