import { StyleSheet, Text, View, Button } from "react-native";
import TimeButton from "./TimeButton";
import mainData from "../TestData/mainData.json"

export default function Home() {
	return (
		<View style={styles.container}>
      {mainData.map(({title, duration}) => 
        <TimeButton title={title} duration={duration}/>
      )}
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
