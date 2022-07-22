import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { NFTDataT } from "../types";
import CircleButton from "./buttons/CircleButton";

type Props = {
  data: NFTDataT;
};

const NFTCard = ({ data }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode={"cover"}
          style={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
});
