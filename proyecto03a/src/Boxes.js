import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Boxes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Caja 1</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Caja 2</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Caja 3</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Caja 4</Text>
        </View>
      </View>
    </View>
  );
}

export default Boxes;

const styles = StyleSheet.create({
  container: {
    width: "100%",  
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  }
});
