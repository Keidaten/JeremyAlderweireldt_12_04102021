//Components
import MainTitle from '../../components/MainTitle';
import WeightBarChart from '../../components/BiaxialBarChart';
import DurationSessionsLineChart from '../../components/LineChart';

function Home() {
	return (
		<main>
			<MainTitle />
			<WeightBarChart />
			<DurationSessionsLineChart />
		</main>
	);
}

export default Home;
