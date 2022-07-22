import { StackNavigationProp } from "@react-navigation/stack";
import { NFTDataT } from "../types";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    data: NFTDataT;
  };
};

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
