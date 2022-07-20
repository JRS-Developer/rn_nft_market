import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import NFTCard from "../components/NFTCard";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Home;
