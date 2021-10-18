//React
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

//PropTypes
KeyDataCard.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	data: PropTypes.number.isRequired,
	measureUnit: PropTypes.string,
	type: PropTypes.string,
};

//Component style
const Card = styled.div`
	border-radius: 5px;
	background-color: ${colors.widgetsBackgroundColor};
	height: 124px;
	width: 258px;
	display: flex;
	align-items: center;
	@media screen and (max-width: 1440px) {
		&:not(:last-child) {
			margin-right: 10px;
		}
	}
`;

const Icon = styled.img`
	height: 60px;
	width: 60px;
	margin-left: 32px;
	margin-right: 24px;
	@media screen and (max-width: 1440px) {
		margin-right: 10px;
	}
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
