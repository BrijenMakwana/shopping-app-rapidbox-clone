import { StyleSheet, Text, View } from "react-native";
import Categories from "../components/Categories";
import PorductBanner from "../components/PorductBanner";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Categories />
      <PorductBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
