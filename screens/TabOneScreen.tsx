import { StyleSheet, Text, View } from "react-native";
import Categories from "../components/Categories";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
