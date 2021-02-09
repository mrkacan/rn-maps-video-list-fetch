import React from "react";
import {Image, Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from './styles'

interface Props {
    showModal?: boolean,
    items: object[],
    onClosePress: () => void
}

const VideoList: React.FC<Props> = ({
                                        items,
                                        showModal,
                                        onClosePress
                                    }) => {
    return <Modal
        animationType="slide"
        visible={showModal}
    >
        <View style={styles.modalWrapper}>
            <TouchableOpacity onPress={onClosePress}>
                <Text style={styles.closeText}>
                    Close
                </Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollViewWrapper}>
                {
                    items.map((item: any, index) => {
                        const {
                            thumbnail,
                            title,
                            description,
                        } = item;

                        return (
                            <View
                                key={index}
                                style={styles.itemWrapper}
                            >
                                <Image
                                    style={styles.itemImage}
                                    resizeMode="contain"
                                    source={{uri: thumbnail}}
                                />
                                <View>
                                    <View style={styles.itemInfoWrapper}>
                                        <Text numberOfLines={1} style={styles.title}>
                                            {title}
                                        </Text>
                                        <Text numberOfLines={1} style={styles.description}>
                                            {description}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    </Modal>
}

export default VideoList
