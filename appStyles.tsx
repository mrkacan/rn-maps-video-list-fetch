import {Dimensions, StyleSheet, ViewStyle} from 'react-native';

type Style = {
    container: ViewStyle,
    map: ViewStyle,
};

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default styles;
