import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

import BackgorundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

interface FormDataProps {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required("Informe o email").email("Email inválido"),
  password: yup.string().required("Informe a senha."),
});

export const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const handleNewAccount = () => {
    navigation.navigate("signUp");
  };

  const handleLogin = (data: FormDataProps) => {};

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
        <Image
          defaultSource={BackgorundImg}
          source={BackgorundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position={"absolute"}
        />
        <Center my={24}>
          <LogoSvg />
          <Text color={"gray.100"} fontSize={"sm"}>
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading fontFamily={"heading"} color={"gray.100"} fontSize={"xl"} mb={6}>
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            render={() => <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />}
          />
          <Controller control={control} name="password" render={() => <Input placeholder="Senha" secureTextEntry />} />

          <Button onPress={handleSubmit(handleLogin)} title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color={"gray.100"} fontSize={"sm"} mb={3} fontFamily={"body"}>
            Ainda não tem acesso?
          </Text>

          <Button onPress={handleNewAccount} title="Criar conta" variant={"outline"} />
        </Center>
      </VStack>
    </ScrollView>
  );
};
