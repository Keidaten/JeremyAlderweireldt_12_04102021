import styled from 'styled-components';

//Assets
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

//Style
import colors from '../../styles/Colors';

const TopNavBar = styled.header`
	height: 91px;
	background-color: ${colors.navsBackgroundColor};
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	padding-left: 26px;
`;

const TopNav = styled.nav`
	display: flex;
	justify-content: space-around;
	width: 100%;
	> a {
		color: ${colors.white};
	}
`;

function Header() {
	return (
		<TopNavBar>
			<Link to="/">
				<img src={logo} className="App-logo" alt="logo" />
			</Link>
			<TopNav>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/">Profil</NavLink>
				<NavLink to="/">Réglages</NavLink>
				<NavLink to="/">Communauté</NavLink>
			</TopNav>
		</TopNavBar>
	);
}

export default Header;
