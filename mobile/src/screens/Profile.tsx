import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const imageSize = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
  );

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      setPhotoIsLoading(false);

      if (photoSelected?.canceled) return;

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma imagem de até 5MB.",
            placement: "top",
            bgColor: "red.500",
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton w={imageSize} h={imageSize} rounded={"full"} startColor={"gray.400"} endColor={"gray.500"} />
          ) : (
            <UserPhoto source={{ uri: userPhoto }} alt="Perfil" size={imageSize} mr={4} />
          )}
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color={"green.500"} fontWeight={"bold"} fontSize={"md"} mt={2} mb={8}>
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg={"gray.600"} value="Rafael Cassiano" />
          <Input placeholder="Email" bg={"gray.600"} value="rafael30011@gmail.com" isDisabled />

          <Heading fontFamily={"heading"} color={"gray.200"} fontSize={"md"} mb={2} alignSelf={"flex-start"} mt={12}>
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
