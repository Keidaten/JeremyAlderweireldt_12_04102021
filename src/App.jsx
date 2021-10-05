//React
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
