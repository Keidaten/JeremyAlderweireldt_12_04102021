//Components
import MainTitle from '../../components/MainTitle';
import WeightBarChart from '../../components/WeightBarChart';
import DurationSessionsLineChart from '../../components/DurationSessionsLineChart';
import PerformanceRadarChartWidget from '../../components/PerformanceRadarChart';

function Home() {
	return (
		<main>
			<MainTitle />
			<WeightBarChart />
			<DurationSessionsLineChart />
			<PerformanceRadarChartWidget />
		</main>
	);
}

export default Home;
