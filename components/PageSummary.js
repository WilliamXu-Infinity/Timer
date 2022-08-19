import { StyleSheet, Text, View, Button } from "react-native";
import TimerContext from "./timerContext";
import { useContext } from 'react'

export default function Summary() {
  const { timerHistory } = useContext(TimerContext)

  return (
		<View style={styles.container}>
      {Object.keys(timerHistory).map(title => {
        const {count, duration} = timerHistory[title]
        return <Text>`${title}: ${count}: ${duration}`</Text>
      })}
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
