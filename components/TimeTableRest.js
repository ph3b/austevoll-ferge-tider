import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { timeToFerryLeaves } from "../helpers/timeTo";

const TimeTableRest = ({ ferryTimes }) => (
  <View>
    {ferryTimes.map(time => (
      <View key={time} style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={{ width: "55%" }}>
          <Text style={[styles.regularText, styles.semiBold]}>{time}</Text>
        </View>
        <View style={{ width: "55%" }}>
          <Text style={[styles.regularText, styles.semiLight]}>
            {timeToFerryLeaves(time)}
          </Text>
        </View>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  regularText: {
    fontSize: 35
  },
  bold: {
    fontWeight: "800"
  },
  semiBold: {
    fontWeight: "500"
  },
  semiLight: {
    fontWeight: "200"
  }
});

export default TimeTableRest;
