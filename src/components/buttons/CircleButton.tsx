import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

interface Props {
  imgUrl: ImageSourcePropType;
  left?: number;
  right?: number;
  top?: number;
  handlePress?: (e: GestureResponderEvent) => any;
}

const CircleButton = ({ imgUrl, handlePress, ...props }: Props) => {
  return (
    <Pressable
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </Pressable>
  );
};

export default CircleButton;

const styles = StyleSheet.create({});
