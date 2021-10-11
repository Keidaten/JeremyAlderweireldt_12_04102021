//React
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

//Pages
import HomePage from './pages/HomePage';

//Components
import Header from './components/Header';
import LeftNav from './components/LeftNav';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Header />
			<LeftNav />
			<Switch>
				<Route exact path="/:id" component={HomePage}></Route>
				<Redirect to="/12" />
			</Switch>
		</Router>
	);
}

export default App;
