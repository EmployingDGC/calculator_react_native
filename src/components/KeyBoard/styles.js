import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        
    },

    row: {
        flexDirection: "row",
    },

    styleButton: {
        width: Dimensions.get("window").width / 4,
        height: 80,
        borderWidth: 3,
        borderColor: "#202020",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },

    styleText: {
        fontSize: 30,
        color: "#fff",
    },
});

export default styles;
