import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BackgorundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
//import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMemo } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup?.string()?.required("Informe o email.").email("Email inválido."),
  password: yup.string().required("Informe a senha.").min(6, "A senha deve ter no mínimo 6 caracteres."),
  password_confirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});

export const SignUp = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  async function handleSignUp(data: FormDataProps) {
    try {
      await fetch("http://192.168.10.127:3333/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      control._reset({
        email: "",
        name: "",
        password: "",
        password_confirm: "",
      });
    }
  }

  const listInput = useMemo(() => {
    return [
      {
        name: "name",
        InputElement: (props: any) => <Input {...props} placeholder="Nome" />,
      },
      {
        name: "email",
        InputElement: (props: any) => (
          <Input {...props} placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
        ),
      },
      {
        name: "password",
        InputElement: (props: any) => <Input {...props} placeholder="Senha" secureTextEntry />,
      },
      {
        name: "password_confirm",
        InputElement: (props: any) => (
          <Input
            {...props}
            placeholder="Confirme sua senha"
            onSubmitEditing={handleSubmit(handleSignUp)}
            secureTextEntry
            returnKeyType="send"
          />
        ),
      },
    ] as const;
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={12}>
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
            Crie sua conta
          </Heading>

          {listInput.map(({ InputElement, name, ...rest }) => (
            <>
              <Controller
                control={control}
                name={name}
                key={name}
                {...rest}
                render={({ field: { onChange, value } }) => (
                  <InputElement value={value} onChangeText={onChange} errorMessage={errors[name]?.message} />
                )}
              />
            </>
          ))}

          <Button onPress={handleSubmit(handleSignUp)} title="Criar e acessar" />
        </Center>

        <Center mt={12}>
          <Button onPress={handleGoBack} title="Voltar para o login" variant={"outline"} />
        </Center>
      </VStack>
    </ScrollView>
  );
};
