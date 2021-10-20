import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styles
import colors from '../../styles/Colors.jsx';

/**
 * Component who build radar chart
 * @param {Object} performance fetched user infos about performances
 * @param {Object[]} performance.data user's personal infos
 * @param {Number} performance.data[].value value of performance
 * @param {Number} performance.data[].kind type of performance as number
 * @returns {Component} radar to display
 */
function PerformanceRadarChart({ performance }) {
	/**
	 * Component who build radar chart
	 * @param {Number} kind value of performance
	 * @returns {String} number translated to performance type
	 */
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
			<RadarChart data={performance.data} width={250} height={230} cx="50%" cy="55%" outerRadius="70%">
				<PolarGrid radialLines={false} />
				<PolarAngleAxis dataKey={kindNumberToKindString} dy={2} tickLine={false} tick={{ fontSize: 11 }} stroke="white" />
				<Radar dataKey="value" fill={colors.secondaryColor} fillOpacity={0.6} />
			</RadarChart>
		</PerformanceRadarChartWidget>
	);
}

//PropTypes
PerformanceRadarChart.propTypes = {
	performance: PropTypes.object.isRequired,
};

//Component style
const PerformanceRadarChartWidget = styled.div`
	border-radius: 5px;
	grid-area: radarBar;
	justify-self: center;
	width: 258px;
	height: 263px;
	background-color: ${colors.radarGraphBackgroundColor};
`;

export default PerformanceRadarChart;
