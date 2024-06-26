import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

const theme = DefaultTheme;

export const Routes = () => {
  const { colors } = useTheme();

  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {/*<AppRoutes />*/}
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
