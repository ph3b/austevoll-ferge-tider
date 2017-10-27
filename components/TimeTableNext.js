import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { timeToFerryLeaves } from "../helpers/timeTo";

const TimeTableNext = ({ nextFerry }) => (
  <View>
    <View>
      <View>
        <Text style={[styles.regularText, styles.bold]}>Neste</Text>
      </View>

      <View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View style={{ width: "55%" }}>
            <Text style={[styles.regularText, styles.semiBold]}>
              {nextFerry}
            </Text>
          </View>
          <View style={{ width: "45%" }}>
            <Text style={[styles.regularText, styles.semiLight]}>
              {timeToFerryLeaves(nextFerry)}
            </Text>
          </View>
        </View>
      </View>
    </View>
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

export default TimeTableNext;
