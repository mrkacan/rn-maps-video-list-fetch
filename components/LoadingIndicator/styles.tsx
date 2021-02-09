import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
    indicator: ViewStyle;
};

const styles = StyleSheet.create<Style>({
    indicator: {
        width:'100%',
        height:'100%',
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent:'center',
        alignItems:'center',
        zIndex: 1
    }
});

export default styles;
