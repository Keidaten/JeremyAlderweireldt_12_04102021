import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styles
import colors from '../../styles/Colors';

/**
 * Component who build main title
 * @param {Object} user fetched user infos
 * @param {Number} user.todayScore user's score
 * @returns {Component} radar chart to display
 */
function ScoreRadialBarChart({ user }) {
	const scoreFormatted = [{ name: 'score', value: user.todayScore === undefined ? user.score * 100 : user.todayScore * 100, fill: colors.biaxialGraphBarsColor2 }];

	return (
		<ScoreRadialBarChartWidget>
			<React.Fragment>
				<ScoreRadialBarChartTitle>Score</ScoreRadialBarChartTitle>
				<ResponsiveContainer height="100%" width="100%">
					<RadialBarChart cx="50%" cy="50%" innerRadius={70} barSize={8} data={scoreFormatted} startAngle={-275} endAngle={95}>
						<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
						<RadialBar cornerRadius={20} dataKey="value" />
					</RadialBarChart>
				</ResponsiveContainer>
				<ScoreInfo>
					<ScoreInfoNumber>{user.todayScore === undefined ? user.score * 100 : user.todayScore * 100}%</ScoreInfoNumber>
					<ScoreInfoText>de votre objectif</ScoreInfoText>
				</ScoreInfo>
			</React.Fragment>
		</ScoreRadialBarChartWidget>
	);
}

//PropTypes
ScoreRadialBarChart.propTypes = {
	user: PropTypes.object.isRequired,
};

//Component style
const ScoreRadialBarChartWidget = styled.div`
	width: 258px;
	height: 263px;
	background-color: ${colors.widgetsBackgroundColor};
	position: relative;
	border-radius: 5px;
	grid-area: scoreBar;
	justify-self: end;
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

export default ScoreRadialBarChart;
