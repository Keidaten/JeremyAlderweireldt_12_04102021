import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

//Components
import MainTitle from '../../components/MainTitle';
import WeightBarChart from '../../components/WeightBarChart';
import DurationSessionsLineChart from '../../components/DurationSessionsLineChart';
import PerformanceRadarChartWidget from '../../components/PerformanceRadarChart';
import ScoreRadialBarChart from '../../components/ScoreRadialBarChart';
import KeyDataCardsSection from '../../components/KeyDataCardsSection';

//Services
import getUserDatas from '../../services/userDatas';

function Home() {
	const idParams = useParams().id;
	const [user, setUser] = useState();
	const [activity, setActivity] = useState();
	const [sessions, setSessions] = useState();
	const [performance, setPerformance] = useState();

	useEffect(() => {
		setUser(null);
		getUserDatas(idParams).then((response) => {
			setUser(response.data);
		});
		getUserDatas(idParams, '/activity').then((response) => {
			setActivity(response.data);
		});
		getUserDatas(idParams, '/average-sessions').then((response) => {
			setSessions(response.data);
		});
		getUserDatas(idParams, '/performance').then((response) => {
			setPerformance(response.data);
		});
	}, [idParams]);

	return (
		<main>
			{user ? (
				<React.Fragment>
					<HomeAnalytics>
						<MainTitle user={user} />
						{activity ? <WeightBarChart activity={activity} /> : 'loading...'}
						{sessions ? <DurationSessionsLineChart sessions={sessions} /> : 'loading...'}
						{performance ? <PerformanceRadarChartWidget performance={performance} /> : 'loading...'}
						<ScoreRadialBarChart user={user} />
						<KeyDataCardsSection user={user} />
					</HomeAnalytics>
				</React.Fragment>
			) : (
				'Loading...'
			)}
		</main>
	);
}

const HomeAnalytics = styled.section`
	max-width: 1126px;
	margin: auto;
	display: grid;
	row-gap: 26px;
	column-gap: 30px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 320px auto;
	grid-template-areas:
		'heading heading heading heading '
		'weightBar weightBar weightBar foodCount'
		'lineBar radarBar scoreBar foodCount';
	@media screen and (max-width: 1440px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto 320px auto;
		grid-template-areas:
			'heading heading heading '
			'weightBar weightBar weightBar '
			'lineBar radarBar scoreBar '
			'foodCount foodCount foodCount';
	}
`;

export default Home;
