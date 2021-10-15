import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

//Services
import getUserPerformance from '../../services/performance.js';

//Styles
import colors from '../../styles/Colors.jsx';

function PerformanceRadarChart() {
	const idParams = useParams().id;

	const [userPerformance, setUserPerformance] = useState();
	const [isDataFetched, setDataFetched] = useState();

	useEffect(() => {
		setDataFetched(false);
		getUserPerformance(idParams).then((response) => {
			setUserPerformance(response.data.data);
			setDataFetched(true);
		});
	}, [idParams]);

	const kindNumberToKindString = ({ kind }) => {
		let value = '';
		switch (kind) {
			case 1:
				value = 'Cardio';
				break;
			case 2:
				value = 'Energie';
				break;
			case 3:
				value = 'Endurance';
				break;
			case 4:
				value = 'Force';
				break;
			case 5:
				value = 'Vitesse';
				break;
			case 6:
				value = 'Intensité';
				break;
			default:
				value = '';
		}
		return value;
	};

	return (
		<PerformanceRadarChartWidget>
			{isDataFetched ? (
				<RadarChart width={250} height={230} cx="50%" cy="55%" outerRadius="70%" data={userPerformance}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dy={2} dataKey={kindNumberToKindString} tickLine={false} tick={{ fontSize: 11 }} stroke="white" />
					<Radar dataKey="value" fill={colors.secondaryColor} fillOpacity={0.6} />
				</RadarChart>
			) : (
				'Loading...'
			)}
		</PerformanceRadarChartWidget>
	);
}

const PerformanceRadarChartWidget = styled.div`
	width: 258px;
	height: 263px;
	background-color: ${colors.radarGraphBackgroundColor};
`;

export default PerformanceRadarChart;
