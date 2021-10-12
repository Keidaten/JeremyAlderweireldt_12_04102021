//Components
import MainTitle from '../../components/MainTitle';
import WeightBarChart from '../../components/WeightBarChart';
import DurationSessionsLineChart from '../../components/DurationSessionsLineChart';

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
