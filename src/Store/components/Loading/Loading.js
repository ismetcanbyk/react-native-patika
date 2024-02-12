import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loading = () => {
    return (
        <LottieView
            source={require("../../assets/loading.json")} style={{ width: "100%", height: "100%" }}
            autoPlay
            loop />
    )
}

export default Loading