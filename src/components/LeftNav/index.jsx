import styled from 'styled-components';

//Assets
import { NavLink } from 'react-router-dom';
import meditationIcon from '../../assets/meditationIcon.png';
import swimIcon from '../../assets/swimIcon.png';
import cyclingIcon from '../../assets/cyclingIcon.png';
import dumbellIcon from '../../assets/dumbellIcon.png';
//Style
import colors from '../../styles/Colors';

const LeftNavBar = styled.div`
	background-color: ${colors.navsBackgroundColor};
	width: 117px;
	height: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const LeftNavLinks = styled.nav`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 20%;
	img {
		margin: 10px;
	}
`;

const Copyright = styled.span`
	color: white;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	position: relative;
	top: 65%;
	font-size: 0.75rem;
`;

function LeftNav() {
	return (
		<LeftNavBar>
			<LeftNavLinks>
				<NavLink to="/">
					<img src={meditationIcon} alt="" />
				</NavLink>
				<NavLink to="/">
					<img src={swimIcon} alt="" />
				</NavLink>
				<NavLink to="/">
					<img src={cyclingIcon} alt="" />
				</NavLink>
				<NavLink to="/">
					<img src={dumbellIcon} alt="" />
				</NavLink>
			</LeftNavLinks>
			<Copyright>Copyright, SportSee 2020</Copyright>
		</LeftNavBar>
	);
}

export default LeftNav;
