import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { HomeScreenNavigationProps } from "../navigation/types";
import { NFTDataT } from "../types";
import CircleButton from "./buttons/CircleButton";
import RectButton from "./buttons/RectButton";
import SubInfo, { EthPrice, NFTTitle } from "./SubInfo";

type Props = {
  data: NFTDataT;
};

const NFTCard = ({ data }: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <View
        style={{
          marginTop: -50,
        }}
      >
        <SubInfo />

        <View style={{ width: "100%", padding: SIZES.font }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />

          <View
            style={{
              marginTop: SIZES.font,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <EthPrice price={data.price} />
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
        </View>
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
