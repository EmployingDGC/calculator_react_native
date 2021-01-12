import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#202020",
    },

    textDisplay: {
        fontSize: 40,
        color: "#fff",
    },
});

export default styles;
