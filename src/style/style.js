import { StyleSheet } from "react-native";

export const contentStyles = StyleSheet.create({
	
    content: {
        padding: 20
    }

})

export const buttonsStyles = StyleSheet.create({

    // Buttons styles
    buttonWrap: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10
    },

    button: {
        flexGrow: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    }

});