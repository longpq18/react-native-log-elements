import React from 'react';
import { 
	TouchableOpacity, 
	View, 
	Text 
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icon/SimpleLineIcons';
import { colors } from 'utils';

const ButtonComponent = ({ 
	containerStyle, 
	onClick,
	iconName,
	iconSize,
	iconColor,
	name,
	buttonTextStyle,
	iconStyle,
	showIcon,
	disabled
}) => (
	<TouchableOpacity 
		style={[styles.container, containerStyle]}
		onPress={!disabled ? onClick : }
	>
		{showIcon && (
			<Icon 
				name={iconName}
				size={30 || iconSize}
				color={colors.green || iconColor}
				style={[styles.icon, iconStyle]}
			/>
		)}
		<Text style={[styles.buttonText, buttonTextStyle]}>{ 'Button' || name }</Text>
	</TouchableOpacity>
);

ButtonComponent.defaultProps = {
	containerStyle: {}, 
	onClick: () => {},
	iconName: 'login',
	iconSize: 30,
	iconColor: colors.green,
	name: 'Button',
	buttonTextStyle: {},
	iconStyle: {},
	showIcon: false,
}

ButtonComponent.propTypes = {
	containerStyle: PropTypes.object, 
	onClick: PropTypes.func,
	iconName: PropTypes.string,
	iconSize: PropTypes.number,
	iconColor: PropTypes.string,
	name: PropTypes.string,
	buttonTextStyle: PropTypes.object,
	iconStyle: PropTypes.object,
	showIcon: PropTypes.bool,
}

export default ButtonComponent;