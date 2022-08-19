import { StyleSheet, Text, View, Button } from "react-native";

export default function Setting() {
	return (
		<View style={styles.container}>
      <Text>Setting Page</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
