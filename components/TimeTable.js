import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TimeTableNext from "./TimeTableNext";
import TimeTableRest from "./TimeTableRest";

const getFutureFerries = ferryTimes => {
  return ferryTimes.filter(ferry => {
    const ferryTimeString = ferry.replace("*", "");
    const [hour, minutes] = ferryTimeString.split(":");
    const ferryTime = new Date();
    ferryTime.setHours(parseInt(hour));
    ferryTime.setMinutes(parseInt(minutes));
    const now = new Date();
    return ferryTime > now;
  });
};

const TimeTable = ({ ferryTimes }) => {
  const [nextFerry, ...restOfThem] = getFutureFerries(ferryTimes);
  return (
    <View style={styles.container}>
      <TimeTableNext nextFerry={nextFerry} />
      <View style={styles.underline} />
      <TimeTableRest ferryTimes={restOfThem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  regularText: {
    fontSize: 35
  },
  bold: {
    fontWeight: "800"
  },
  underline: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5
  }
});

export default TimeTable;
