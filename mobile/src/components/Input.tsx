import { Input as InputNative, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export const Input = ({ errorMessage = null, isInvalid, ...rest }: Props) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <InputNative
        bg={"gray.700"}
        h={14}
        px={4}
        borderWidth={0}
        fontSize={"md"}
        color={"white"}
        fontFamily={"body"}
        placeholderTextColor={"gray.300"}
        _focus={{ bg: "gray.700", borderWidth: 1, borderColor: "green.500" }}
        isInvalid={invalid}
        _invalid={{
          borderColor: "red.500",
          borderWidth: 1,
        }}
        {...rest}
      />

      <FormControl.ErrorMessage
        _text={{
          color: "red.500",
        }}
      >
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
