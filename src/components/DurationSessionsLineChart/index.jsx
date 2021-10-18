import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styles
import colors from '../../styles/Colors';

/**
 * Component DurationSessionsLineChart
 * @param {Object} dataSessions object containing user's sessions
 * @param {Object[]} dataSessions.sessions
 * @param {Number} dataSessions.sessions[].day
 * @param {Number} dataSessions.sessions[].sessionLength
 * @param {Number} dataSessions.userId
 * @returns {Component} div with data to display (sessionLength)
 */
function DurationSessionsLineChart({ dataSessions }) {
	/**
	 * Custom linechart tooltip
	 * @param {Boolean} active Tooltip status
	 * @param {Object[]} payload Contain linechart datas
	 * @returns {Component} div with data to display (sessionLength)
	 */
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<ToolTipContainer>
					<p>{`${payload[0].value} min`}</p>
				</ToolTipContainer>
			);
		}

		return null;
	};

	/**
	 * Change the value on the xAxis
	 * @param {Number} data (day) extracted from dataSessions.sessions
	 * @returns {String} value to be displayed
	 */
	const numberToDay = ({ day }) => {
		let value = '';
		switch (day) {
			case 1:
				value = 'L';
				break;
			case 2:
				value = 'M';
				break;
			case 3:
				value = 'M';
				break;
			case 4:
				value = 'J';
				break;
			case 5:
				value = 'V';
				break;
			case 6:
				value = 'S';
				break;
			case 7:
				value = 'D';
				break;
			default:
				value = '';
		}
		return value;
	};

	return (
		<DurationSessionsWidget>
			<React.Fragment>
				<DurationSessionWidgetHeading>Durée moyenne des sessions</DurationSessionWidgetHeading>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						width={500}
						height={300}
						data={dataSessions.sessions}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<defs>
							<linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
								<stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
								<stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
							</linearGradient>
						</defs>
						<XAxis padding={{ left: -10, right: -10 }} dataKey={numberToDay} tick={{ fontSize: 12 }} stroke="rgba(255, 255, 255, 0.5)" axisLine={false} tickLine={false} />
						<YAxis hide={true} domain={['dataMin -20', 'dataMax +60']} />
						<Tooltip content={<CustomTooltip />} />
						<Line stroke="url(#lineColor)" strokeWidth={2} type="natural" dot={false} activeDot={{ stroke: 'rgba(255, 255, 255, 0.3', strokeWidth: 5 }} dataKey="sessionLength" domain={['dataMin-4', 'dataMax+1']} />
					</LineChart>
				</ResponsiveContainer>
				<Cover />
			</React.Fragment>
		</DurationSessionsWidget>
	);
}

//PropTypes
DurationSessionsLineChart.propTypes = {
	dataSessions: PropTypes.object.isRequired,
};

//Component style
const DurationSessionsWidget = styled.div`
	grid-area: lineBar;
	width: 258px;
	height: 263px;
	background-color: ${colors.linearGraphBackgroundColor};
	border-radius: 5px;
	position: relative;
	padding: 30px 0 10px 0;
`;

const DurationSessionWidgetHeading = styled.p`
	font-size: 15px;
	color: white;
	opacity: 0.5;
	margin: 0 76px 0 34px;
	position: absolute;
`;

const Cover = styled.div`
	background-color: black;
	opacity: 0.1;
	width: 30.625%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0px;
`;

const ToolTipContainer = styled.div`
	width: 54.6px;
	height: 35px;
	background-color: white;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default DurationSessionsLineChart;
