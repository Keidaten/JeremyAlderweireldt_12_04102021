//React
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//Styles
import colors from '../../styles/Colors';

//Services
import getUser from '../../services/user';

function MainTitle() {
	const idParams = useParams().id;
	const [user, setUser] = useState([]);

	useEffect(() => {
		getUser(idParams).then((response) => {
			setUser(response.data.userInfos);
		});
	}, [idParams]);

	return (
		<Title>
			<h1>
				Bonjour <Name>{user.firstName}</Name>
			</h1>
			<p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
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
