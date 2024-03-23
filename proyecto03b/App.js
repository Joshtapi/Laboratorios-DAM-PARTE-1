import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.profileImageContainer}>
          <Image source={require("./assets/foto.png")} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.centerText}>STARBUCKS</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            <Image source={require("./assets/imagen1.png")} style={styles.gridImage} />
            <Text style={[styles.gridText, styles.bold]}>Caramel</Text>
            <Text style={styles.drinkDetails}>Delicioso caramelo con leche caliente</Text>
          </View>
        </View>
        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            <Image source={require("./assets/imagen2.png")} style={styles.gridImage} />
            <Text style={[styles.gridText, styles.bold]}>Mocca</Text>
            <Text style={styles.drinkDetails}>Chocolate y espresso mezclados</Text>
          </View>
        </View>
        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            <Image source={require("./assets/imagen3.png")} style={styles.gridImage} />
            <Text style={[styles.gridText, styles.bold]}>Chia</Text>
            <Text style={styles.drinkDetails}>Semillas de chía en leche con sabor</Text>
          </View>
        </View>
        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            <Image source={require("./assets/imagen4.png")} style={styles.gridImage} />
            <Text style={[styles.gridText, styles.bold]}>Capuchino</Text>
            <Text style={styles.drinkDetails}>Espresso con leche vaporizada</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0FA07C"
  },
  profileImageContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#eee",
    overflow: 'hidden', 
  },
  profileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  center: {
    height: "10%",
    backgroundColor: "#136A54",
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerText: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottom: {
    height: "50%",
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10
  }, 
  bottomItem: {
    width: "50%",
    height: "50%",
    padding: 10
  }, 
  bottomItemInner: {
    flex: 1,
    backgroundColor: "#292929",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  gridText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  gridImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 40 
  },
  drinkDetails: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center'
  }
});