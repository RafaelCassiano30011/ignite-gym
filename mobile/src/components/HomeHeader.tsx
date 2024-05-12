import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function HomeHeader() {
  const image =
    "https://www.facebook.com/profile/pic.php?cuid=AYhCllhpqOMYVvCs6xfJHOUBvVdbBL3hTdLVI9sqWpq3Mnpe-J3t-tvBGaUQ7QH30wacK2Z7aftXmzeq9pWBlxuTqLxYhi6k2-vjluTPD1Huq06N81VuSNvbFIGVluHyizHIZmR1f-a-KlV7sxWKyzYhmtWBY9pBCV1TBEFT-88B_7z7_Tc_oBZNpLrS-1OPv2LtD_NYrStaYc-sOi-JU05Mg-oqjzyf-g6g7FNTh8IbYHXoRJhql_iEx_-rt5k56q0cRnjKLqJ7gr93c6IRC4ou5q0ZgEiUki329qmVB_gONsWk3wwG5TH_1nCzPcLRp4dZ3CQ4CW1YdXANftONfzmN&square_px=64";

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto
        source={{
          uri: image,
        }}
        alt="Foto do Usuario"
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá,
        </Text>
        <Heading fontFamily={"heading"} color={"gray.100"} fontSize={"md"}>
          Rafael
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color={"gray.200"} size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
