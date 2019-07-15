import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width();
const height = Dimensions.get('window').height();

const sizes = {
	screenWidth: width,
	screenHeight: height
}

export default sizes;