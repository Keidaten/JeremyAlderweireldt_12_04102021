//React
import styled from 'styled-components';
import React from 'react';

//Styles
import colors from '../../styles/Colors';

function MainTitle({ user }) {
	return (
		<Title>
			{user ? (
				<React.Fragment>
					<h1>
						Bonjour <Name>{user.userInfos.firstName}</Name>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
				</React.Fragment>
			) : (
				'loading...'
			)}
		</Title>
	);
}

const Title = styled.section`
	margin-bottom: 4.8125rem;
	grid-area: heading;
	h1 {
		font-size: 3rem;
		font-weight: 500;
		margin-bottom: 2.5625rem;
	}
	p {
		font-size: 1.125rem;
	}
`;

const Name = styled.span`
	color: ${colors.secondaryColor};
`;

export default MainTitle;
