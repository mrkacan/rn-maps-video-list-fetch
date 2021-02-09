import * as React from 'react';
import MapView, {MapEvent} from 'react-native-maps';
import {Alert, BackHandler, View} from 'react-native';
import {getTransformedVideoList, getYoutubeURL} from './helpers';
import LoadingIndicator from "./components/LoadingIndicator";
import VideoList from "./components/VideoList";
import styles from './appStyles'

interface MainProps {
}

interface MainState {
    isLoading: boolean,
    showModal: boolean,
    items: object[]
}

class App extends React.Component<MainProps, MainState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: false,
            showModal: false,
            items: []
        }
    }

    componentDidMount() {
        const {
            showModal
        } = this.state;

        BackHandler.addEventListener('hardwareBackPress', () => {

            if (showModal) {
                this.setState({
                    showModal: false,
                })

                return false;
            }

            return false;
        });
    }

    onLocationPress = async (e: MapEvent): Promise<void> => {

        this.setState({
            isLoading: true,
        })

        const {
            latitude,
            longitude
        } = e.nativeEvent.coordinate;

        const url = getYoutubeURL({
            latitude,
            longitude
        })

        const response = await (await fetch(url, {
            method: 'GET'
        })).json()

        if (response.error) {
            Alert.alert('Error', response.error.message)
            this.setState({
                isLoading: false,
            })
            return;
        }

        const transformedData = getTransformedVideoList(response.items)

        this.setState({
            isLoading: false,
        }, () => {
            if (transformedData.length > 0) {
                this.setState({
                    items: transformedData,
                    showModal: true,
                })
            }

        })
    }

    render() {
        const {
            isLoading,
            showModal,
            items,
        } = this.state;

        return (
            <>
                <VideoList
                    items={items}
                    onClosePress={() => {
                        this.setState({
                            showModal: false,
                        })
                    }}
                    showModal={showModal}
                />
                <View style={styles.container}>
                    <LoadingIndicator loading={isLoading}/>
                    <MapView
                        onPress={this.onLocationPress}
                        style={styles.map}
                    />
                </View>
            </>
        );
    }
}

export default App;
