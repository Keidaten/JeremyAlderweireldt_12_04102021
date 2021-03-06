import styled from 'styled-components';

//Assets
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

//Style
import colors from '../../styles/Colors';

/**
 * Header
 * @returns {Component} main header
 */
function Header() {
	return (
		<TopNavBar>
			<Link to="/">
				<img src={logo} className="App-logo" alt="logo" />
			</Link>
			<TopNavLinks>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/">Profil</NavLink>
				<NavLink to="/">Réglages</NavLink>
				<NavLink to="/">Communauté</NavLink>
			</TopNavLinks>
		</TopNavBar>
	);
}

//Component style
const TopNavBar = styled.header`
	height: 91px;
	background-color: ${colors.navsBackgroundColor};
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	padding-left: 26px;
`;

const TopNavLinks = styled.nav`
	display: flex;
	justify-content: space-around;
	width: 100%;
	> a {
		color: ${colors.white};
	}
`;

export default Header;
