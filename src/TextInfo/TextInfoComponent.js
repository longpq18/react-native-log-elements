import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const TextInfoComponent = ({ name, content, styleContainer }) => (
  <View style={[styles.container, styleContainer]}>
    <Text style={styles.textName}>{name}</Text>
    <Text style={styles.textContent}>{content}</Text>
  </View>
);

TextInfoComponent.defaultProps = {
  styleContainer: {},
  name: 'Name',
  content: 'Content',
}

TextInfoComponent.propTypes = {
  styleContainer: PropTypes.object,
  name: PropTypes.string,
  content: PropTypes.string,
}

export default TextInfoComponent;