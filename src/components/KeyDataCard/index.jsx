//React
import styled from 'styled-components';

//Styles
import colors from '../../styles/Colors';

function KeyDataCard({ src, alt, data, measureUnit, type }) {
	return (
		<Card>
			<Icon src={src} alt={alt} />
			<Infos>
				<Count>
					{data}
					{measureUnit}
				</Count>
				<Type>{type}</Type>
			</Infos>
		</Card>
	);
}

const Card = styled.div`
	background-color: ${colors.widgetsBackgroundColor};
	height: 124px;
	width: 258px;
	margin: 10px;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	height: 60px;
	width: 60px;
	margin-left: 32px;
	margin-right: 24px;
`;

const Infos = styled.div`
	line-height: 25px;
`;

const Count = styled.div`
	font-size: 20px;
	font-weight: bold;
`;

const Type = styled.div`
	font-size: 14px;
	color: ${colors.widgetsTextColor};
`;

export default KeyDataCard;
