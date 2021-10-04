//React
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<GlobalStyle />
			{/* get only the first route who match url  */}
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
