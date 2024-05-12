import { Button as ButtonNative, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  variant?: "solid" | "outline";
}

export const Button = ({ title, variant = "solid", ...rest }: ButtonProps) => {
  return (
    <ButtonNative
      w={"100%"}
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      rounded="sm"
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"green.500"}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text color={variant === "outline" ? "green.500" : "white"} fontSize={"sm"} fontFamily={"heading"}>
        {title}
      </Text>
    </ButtonNative>
  );
};
