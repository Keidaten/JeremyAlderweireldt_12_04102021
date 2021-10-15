import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';

//Components
import MainTitle from '../../components/MainTitle';
import WeightBarChart from '../../components/WeightBarChart';
import DurationSessionsLineChart from '../../components/DurationSessionsLineChart';
import PerformanceRadarChartWidget from '../../components/PerformanceRadarChart';
import ScoreRadialBarChart from '../../components/ScoreRadialBarChart';
import KeyDataCard from '../../components/KeyDataCard';

//Services
import getUser from '../../services/user';

//Assets
import caloriesIcon from '../../assets/caloriesIcon.png';
import proteinIcon from '../../assets/proteinIcon.png';
import carbsIcon from '../../assets/carbsIcon.png';
import fatIcon from '../../assets/fatIcon.png';

function Home() {
	const idParams = useParams().id;
	const [user, setUser] = useState();

	useEffect(() => {
		setUser(null);
		getUser(idParams).then((response) => {
			setUser(response.data);
		});
	}, [idParams]);

	return (
		<main>
			{user ? (
				<React.Fragment>
					<MainTitle />
					<WeightBarChart />
					<DurationSessionsLineChart />
					<PerformanceRadarChartWidget />
					<ScoreRadialBarChart />
					<KeyDataCard src={caloriesIcon} alt="Icône flamme" data={user.keyData.calorieCount} type="Calories" measureUnit="kCal" />
					<KeyDataCard src={proteinIcon} alt="Icône poulet" data={user.keyData.proteinCount} type="Protéines" measureUnit="g" />
					<KeyDataCard src={carbsIcon} alt="Icône pomme" data={user.keyData.carbohydrateCount} type="Glucides" measureUnit="g" />
					<KeyDataCard src={fatIcon} alt="Icône bruger" data={user.keyData.lipidCount} type="Lipides" measureUnit="g" />
				</React.Fragment>
			) : (
				'Loading...'
			)}
		</main>
	);
}

export default Home;
