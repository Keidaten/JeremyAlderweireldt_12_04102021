//Components
import MainTitle from '../../components/MainTitle';
import WeightBarChart from '../../components/WeightBarChart';
import DurationSessionsLineChart from '../../components/DurationSessionsLineChart';
import PerformanceRadarChartWidget from '../../components/PerformanceRadarChart';
import ScoreRadialBarChart from '../../components/ScoreRadialBarChart';

function Home() {
	return (
		<main>
			<MainTitle />
			<WeightBarChart />
			<DurationSessionsLineChart />
			<PerformanceRadarChartWidget />
			<ScoreRadialBarChart />
		</main>
	);
}

export default Home;
