import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Style = {
    scrollViewWrapper: ViewStyle,
    modalWrapper: ViewStyle,
    itemWrapper: ViewStyle,
    itemInfoWrapper: ViewStyle,
    closeText: TextStyle,
    title: TextStyle,
    description: TextStyle,
    itemImage: ImageStyle,
};

const styles = StyleSheet.create<Style>({
    scrollViewWrapper: {
        flexDirection: 'column'
    },
    modalWrapper: {
        flex: 1,
        padding: 20
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: '#e7e7e7'
    },
    itemInfoWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 5,
        width: '100%'
    },
    closeText: {
        fontSize: 22,
        marginBottom: 20
    },
    itemImage: {
        width: 100,
        backgroundColor: '#e7e7e7',
        height: 55,
    },
    title: {
        width: 250
    },
    description: {
        width: 250
    },
});

export default styles;
