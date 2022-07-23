import {
  FlexStyle,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

interface Props {
  minWidth: FlexStyle["minWidth"];
  fontSize: TextStyle["fontSize"];
  handlePress?: PressableProps["onPress"];
}

const RectButton = ({ minWidth, fontSize, handlePress, ...props }: Props) => {
  return (
    <Pressable
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </Pressable>
  );
};

export default RectButton;

const styles = StyleSheet.create({});
