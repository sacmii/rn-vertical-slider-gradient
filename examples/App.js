/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Slider from "rn-vertical-slider-gradient";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={180}
          disabled={false}
          min={0}
          max={200}
          onChange={(value: number) => {
            // console.log("CHANGE", value);
          }}
          onComplete={(value: number) => {
            // console.log("COMPLETE", value);
          }}
          width={50}
          height={300}
          step={1}
          borderRadius={5}
          minimumTrackTintColor={[
            "#2ecc71",
            "#27ae60",
            "#f1c40f",
            "#f39c12",
            "#d35400",
            "#c0392b"
          ].reverse()}
          maximumTrackTintColor="#ecf0f1"
          showBallIndicator
          ballIndicatorColor={"#000000"}
          ballIndicatorTextColor={"white"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});
