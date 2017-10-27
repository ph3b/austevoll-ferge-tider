import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const PortMenu = ({ activePort, changePort }) => (
  <View style={styles.container}>
    <View style={{ borderBottomWidth: activePort === "krokeide" ? 4 : 0 }}>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => changePort("krokeide")}
      >
        <Text style={styles.portText}>Krokeide</Text>
      </TouchableHighlight>
    </View>

    <View style={{ borderBottomWidth: activePort === "hufthamar" ? 4 : 0 }}>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => changePort("hufthamar")}
      >
        <Text style={styles.portText}>Hufthamar</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  portText: {
    fontSize: 25,
    fontWeight: "500"
  }
});

export default PortMenu;
