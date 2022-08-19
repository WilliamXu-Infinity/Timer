import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import PageHome from "./components/PageHome";
import PageSetting from "./components/PageSetting"
import PageSummary from "./components/PageSummary"
import { TimerContextProvider } from "./components/timerContext";
import mainData from "./TestData/mainData.json"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
    <TimerContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={PageHome} />
          <Tab.Screen name="Settings" component={PageSetting} />
          <Tab.Screen name="Summary" component={PageSummary} />
        </Tab.Navigator>
      </NavigationContainer>
    </TimerContextProvider>
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
