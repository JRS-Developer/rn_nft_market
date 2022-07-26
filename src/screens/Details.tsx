import { StackScreenProps } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import CircleButton from "../components/buttons/CircleButton";
import RectButton from "../components/buttons/RectButton";
import DetailsBid from "../components/DetailsBid";
import DetailsDesc from "../components/DetailsDesc";
import FocusedStatusBar from "../components/FocusedStatusBar";
import SubInfo from "../components/SubInfo";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { RootStackParamList } from "../navigation/types";
import { NFTDataT } from "../types";

type Props = StackScreenProps<RootStackParamList, "Details">;

interface DetailsHeaderProps {
  data: NFTDataT;
  navigation: Props["navigation"];
}

const DetailsHeader = ({ data, navigation }: DetailsHeaderProps) => (
  <View
    style={{
      width: "100%",
      height: 373,
    }}
  >
    <Image
      source={data.image}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ navigation, route }: Props) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <View
              style={{
                marginTop: -50,
              }}
            >
              <SubInfo />
            </View>
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
