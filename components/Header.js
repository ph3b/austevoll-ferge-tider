import React from "react";
import { View, Text, StyleSheet } from "react-native";

const dayArray = [
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
  "Søndag"
];

const monthArray = [
  "Januar",
  "Februar",
  "Mars",
  "April",
  "May",
  "Juni",
  "Juli",
  "August",
  "September",
  "November",
  "Desember"
];

const getDay = () => {
  const today = new Date();
  const todayDate = today.getDate();
  const todayDay = today.getDay();
  const todayMonth = today.getMonth();
  return `${dayArray[todayDay - 1]} ${todayDate}. ${monthArray[
    todayMonth - 1
  ]}`;
};

const Header = () => (
  <View style={styles.header}>
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>Austevoll</Text>
      <Text style={styles.dateText}>{getDay()}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2349E1",
    height: 100
  },
  textContainer: {
    flex: 1,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "white",
    fontSize: 25
  },
  dateText: {
    color: "white",
    fontSize: 14,
    fontWeight: "200"
  }
});

export default Header;
