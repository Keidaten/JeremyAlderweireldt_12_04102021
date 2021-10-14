import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

//Styles
import colors from '../../styles/Colors';

//Services
import getUser from '../../services/user.js';

function ScoreRadialBarChart() {
	const idParams = useParams().id;

	const [score, setScore] = useState();
	const [isDataLoading, setDataLoading] = useState(false);

	useEffect(() => {
		setDataLoading(true);
		getUser(idParams).then((response) => {
			setScore(response.data.todayScore);
			setDataLoading(false);
		});
	}, [idParams]);

	const scoreFormatted = [{ name: 'score', value: score * 100, fill: colors.biaxialGraphBarsColor2 }];

	return (
		<ScoreRadialBarChartWidget>
			{isDataLoading ? (
				'loading...'
			) : (
				<React.Fragment>
					<ScoreRadialBarChartTitle>Score</ScoreRadialBarChartTitle>
					<ResponsiveContainer height="100%" width="100%">
						<RadialBarChart cx="50%" cy="50%" innerRadius={70} barSize={8} data={scoreFormatted} startAngle={-275} endAngle={95}>
							<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
							<RadialBar dataKey="value" />
						</RadialBarChart>
					</ResponsiveContainer>
					<ScoreInfo>
						<ScoreInfoNumber>{score * 100}%</ScoreInfoNumber>
						<ScoreInfoText>de votre objectif</ScoreInfoText>
					</ScoreInfo>
				</React.Fragment>
			)}
		</ScoreRadialBarChartWidget>
	);
}

export default ScoreRadialBarChart;

const ScoreRadialBarChartWidget = styled.div`
	width: 258px;
	height: 263px;
	background-color: ${colors.widgetsBackgroundColor};
	position: relative;
`;

const ScoreRadialBarChartTitle = styled.span`
	font-size: 15px;
	position: absolute;
	top: 30px;
	left: 30px;
	font-weight: 600;
`;

const ScoreInfo = styled.div`
	position: absolute;
	top: 40%;
	right: 50%;
	transform: translate(50%, 0);
	width: 85px;
	display: block;
	text-align: center;
	line-height: 28px;
`;

const ScoreInfoNumber = styled.div`
	text-align: center;
	font-size: 26px;
	font-weight: bold;
`;

const ScoreInfoText = styled.span`
	font-size: 16px;
	color: ${colors.widgetsTextColor};
`;
