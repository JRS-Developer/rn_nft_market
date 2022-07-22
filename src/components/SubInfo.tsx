import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SIZES, assets, COLORS, FONTS, SHADOWS } from "../constants";

interface ImgCmpProps {
  imgUrl: ImageSourcePropType;
  index: number;
}

interface NFTTitleProps {
  title: string;
  titleSize?: number;
  subTitle: string;
  subTitleSize?: number;
}

interface EthPriceProps {
  price: number | string;
}

const people = [
  assets.person01,
  assets.person02,
  assets.person03,
  assets.person04,
];

const ImgCmp = ({ imgUrl, index }: ImgCmpProps) => (
  <Image
    source={imgUrl}
    resizeMethod="scale"
    style={{
      width: 48,
      height: 48,
      marginLeft: index === 0 ? 0 : -SIZES.font,
    }}
  />
);

const People = () => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    {people.map((imgUrl, index) => (
      <ImgCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
    ))}
  </View>
);

const EndDate = () => (
  <View
    style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: "50%",
    }}
  >
    <Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
      }}
    >
      Ending in
    </Text>
    <Text
      style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
      }}
    >
      12h 30m
    </Text>
  </View>
);

export const NFTTitle = ({
  title,
  titleSize = SIZES.large,
  subTitle,
  subTitleSize = SIZES.small,
}: NFTTitleProps) => (
  <View>
    <Text
      style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary,
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary,
      }}
    >
      by {subTitle}
    </Text>
  </View>
);

export const EthPrice = ({ price }: EthPriceProps) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Image
      source={assets.eth}
      resizeMethod="scale"
      style={{
        width: 20,
        height: 20,
        marginRight: 2,
      }}
    />
    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
      }}
    >
      {price}
    </Text>
  </View>
);

const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};

export default SubInfo;

const styles = StyleSheet.create({});
