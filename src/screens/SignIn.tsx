import { VStack, Image } from "native-base";

import BackgorundImg from "@assets/background.png";

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <Image source={BackgorundImg} alt="Pessoas treinando" resizeMode="contain" position={"absolute"} />
    </VStack>
  );
};
