import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, ScrollView, Skeleton, Text, VStack } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const imageSize = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const image =
    "https://www.facebook.com/profile/pic.php?cuid=AYhCllhpqOMYVvCs6xfJHOUBvVdbBL3hTdLVI9sqWpq3Mnpe-J3t-tvBGaUQ7QH30wacK2Z7aftXmzeq9pWBlxuTqLxYhi6k2-vjluTPD1Huq06N81VuSNvbFIGVluHyizHIZmR1f-a-KlV7sxWKyzYhmtWBY9pBCV1TBEFT-88B_7z7_Tc_oBZNpLrS-1OPv2LtD_NYrStaYc-sOi-JU05Mg-oqjzyf-g6g7FNTh8IbYHXoRJhql_iEx_-rt5k56q0cRnjKLqJ7gr93c6IRC4ou5q0ZgEiUki329qmVB_gONsWk3wwG5TH_1nCzPcLRp4dZ3CQ4CW1YdXANftONfzmN&square_px=64";

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton w={imageSize} h={imageSize} rounded={"full"} startColor={"gray.400"} endColor={"gray.500"} />
          ) : (
            <UserPhoto source={{ uri: image }} alt="Perfil" size={imageSize} mr={4} />
          )}
          <TouchableOpacity>
            <Text color={"green.500"} fontWeight={"bold"} fontSize={"md"} mt={2} mb={8}>
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg={"gray.600"} value="Rafael Cassiano" />
          <Input placeholder="Email" bg={"gray.600"} value="rafael30011@gmail.com" isDisabled />

          <Heading color={"gray.200"} fontSize={"md"} mb={2} alignSelf={"flex-start"} mt={12}>
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" secureTextEntry bg={"gray.600"} />
          <Input placeholder="Nova senha" secureTextEntry bg={"gray.600"} />
          <Input placeholder="Confirme a nova senha" secureTextEntry bg={"gray.600"} />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
