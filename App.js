import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import PortMenu from "./components/PortMenu";
import TimeTable from "./components/TimeTable";
import FerryTimes from "./ferrytimes.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePort: "krokeide" };
    this.changePort = this.changePort.bind(this);
  }

  changePort(newPort) {
    this.setState({ activePort: newPort });
  }

  getTimeSlot() {
    const now = new Date();

    if (now.getDay() === 7) {
      return "sunday";
    }

    if (now.getDay() === 6) {
      return "saturday";
    }

    return "man-fri";
  }

  render() {
    const { activePort } = this.state;
    const ferryTimesForPort = FerryTimes[`from_${activePort}`];
    const ferryTimesForToday = ferryTimesForPort[this.getTimeSlot()];

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <PortMenu activePort={activePort} changePort={this.changePort} />
          <TimeTable ferryTimes={ferryTimesForToday} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    marginTop: 15,
    paddingLeft: 50,
    paddingRight: 50,
    flex: 1,
    flexDirection: "column"
  }
});
