import React from "react";
import {ActivityIndicator, View} from "react-native";
import styles from './styles'

interface Props {
    loading?: boolean,
}

const LoadingIndicator: React.FC<Props> = ({loading}) => {
    if (!loading) {
        return null;
    }
    return <View style={styles.indicator}>
        <ActivityIndicator color={'#000'} size={'large'}/>
    </View>
}

export default LoadingIndicator
