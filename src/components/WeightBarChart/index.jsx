import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styles
import colors from '../../styles/Colors';

/**
 * Component DurationSessionsLineChart
 * @param {Object} activity object containing user activity
 * @param {Object[]} activity.sessions
 * @param {String} activity.sessions[].day date as string
 * @param {Number} activity.sessions[].kilogram user weight
 * @param {Number} activity.sessions[].calories user calories
 * @returns {Component} bar chart to display
 */
function WeightBarChart({ activity }) {
	/**
	 * Custom barchart tooltip
	 * @param {Boolean} active Tooltip status
	 * @param {Object[]} payload Contain barchart datas (user weight and user calories)
	 * @returns {Component} div with data to display
	 */
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<ToolTipContainer>
					<p>{`${payload[0].value}Kg`}</p>
					<p>{`${payload[1].value}Kcal`}</p>
				</ToolTipContainer>
			);
		}
		return null;
	};

	/**
	 * Custom tooltip of BarChart
	 * @param {String} tick data datas
	 * @returns {String} tick formatted as day date
	 */
	const formatXAxis = (tick) => {
		console.log(tick);
		tick = tick.toString();
		tick = tick.slice(8);
		return tick;
	};

	return (
		<WeightWidget>
			<React.Fragment>
				<WeightWidgetHeading>
					<span>Activité quotidienne</span>
					<Legend>
						<div>
							<LegendDot color={colors.biaxialGraphBarsColor2}></LegendDot>
							<span>Poids (kg)</span>
						</div>
						<div>
							<LegendDot color={colors.biaxialGraphBarsColor}></LegendDot>
							<span>Calories brûlées (kCal)</span>
						</div>
					</Legend>
				</WeightWidgetHeading>
				<ResponsiveContainer width="100%" height="69.55%">
					<BarChart
						barGap={8}
						data={activity.sessions}
						margin={{
							top: 20,
							right: 0,
							left: 0,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis dy={15} dataKey="day" tickFormatter={formatXAxis} tickLine={false} tick={{ fontSize: 14 }} />
						<YAxis dx={30} yAxisId="kilogram" orientation="right" tick={{ fontSize: 14 }} tickLine={false} axisLine={false} tickCount="3" domain={['dataMin-4', 'dataMax+1']} />
						<YAxis yAxisId="calories" hide={true} domain={[0, 'dataMax +100']} />
						<Tooltip separator="" content={<CustomTooltip />} />
						{/* <Legend wrapperStyle={{ top: -16, fontSize: 14, color: colors.widgetsTextColor }} margin="500px" iconType="circle" verticalAlign="top" align="right" /> */}
						<Bar barSize={7} radius={[50, 50, 0, 0]} name="Poids (kg)" yAxisId="kilogram" dataKey="kilogram" fill={colors.biaxialGraphBarsColor} />
						<Bar barSize={7} radius={[50, 50, 0, 0]} name="Calories brûlées (kCal)" yAxisId="calories" dataKey="calories" fill={colors.biaxialGraphBarsColor2} />
					</BarChart>
				</ResponsiveContainer>
			</React.Fragment>
		</WeightWidget>
	);
}

//PropTypes
WeightBarChart.propTypes = {
	activity: PropTypes.object.isRequired,
};

//Component style
const WeightWidget = styled.div`
	grid-area: weightBar;
	height: 320px;
	border-radius: 5px;
	background-color: ${colors.widgetsBackgroundColor};
	font-size: 15px;
	padding: 24px 29px 25px 32px;
`;

const WeightWidgetHeading = styled.div`
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	> span {
		font-weight: 600;
	}
`;

const Legend = styled.div`
	font-size: 14px;
	display: flex;
	margin-right: 40px;
	div {
		display: flex;
		&:not(:last-child) {
			margin-right: 32px;
		}
	}
`;

const LegendDot = styled.div`
	align-self: center;
	border-radius: 50%;
	height: 8px;
	width: 8px;
	margin-right: 10px;
	background-color: ${(props) => props.color};
`;

const ToolTipContainer = styled.div`
	background-color: ${colors.biaxialGraphBarsColor2};
	padding: 10px 0 10px 0;
	height: 90.72px;
	width: 56.16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	p {
		font-size: 12px;
		color: white;
	}
`;

export default WeightBarChart;
