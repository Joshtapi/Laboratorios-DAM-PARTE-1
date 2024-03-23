import React from "react";
import { StyleSheet, Text,View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Componente del Header</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    height: '15%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  }
});