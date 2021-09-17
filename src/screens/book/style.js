import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	
    content: {
        padding: 20
    },

    // Title and description styles
    titleWrap: {
        marginBottom: 30
    },

    title: {
        fontSize: 20,
        fontWeight: "700"
    },

    author: {
        fontSize: 12,
        fontWeight: '300'
    },

    description: {
        fontSize: 14,
        marginBottom: 30
    },

    // Buttons styles
    buttonWrap: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    button: {
        flexGrow: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },

    editButton: {
        backgroundColor: "#93CAED"
    },

    deleteButton: {
        backgroundColor: "#F47174"
    }

});

export default styles;