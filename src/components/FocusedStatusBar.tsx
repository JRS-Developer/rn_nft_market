import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

type Props = StatusBar["props"];

const FocusedStatusBar = (props: Props) => {
  const isFocused = useIsFocused();

  return <>{isFocused && <StatusBar animated {...props} />}</>;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({});
