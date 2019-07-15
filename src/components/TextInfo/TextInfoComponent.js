import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const TextInfoComponent = ({ 
  name, 
  content, 
  styleContainer, 
  nameStyle, 
  contentStyle 
}) => (
  <View style={[styles.container, styleContainer]}>
    <Text style={[styles.textName, nameStyle]}>{name}</Text>
    <Text style={[styles.textContent, contentStyle]}>{content}</Text>
  </View>
);

TextInfoComponent.defaultProps = {
  styleContainer: {},
  name: 'Name',
  content: 'Content',
  contentStyle: {},
  nameStyle: {}
}

TextInfoComponent.propTypes = {
  styleContainer: PropTypes.object,
  name: PropTypes.string,
  content: PropTypes.string,
  contentStyle: PropTypes.object,
  nameStyle: PropTypes.object,
}

export default TextInfoComponent;