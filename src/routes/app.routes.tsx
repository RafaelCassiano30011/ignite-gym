import { useTheme } from "native-base";

import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";

import HomeIcon from "@assets/home.svg";
import HistoryIcon from "@assets/history.svg";
import ProfileIcon from "@assets/profile.svg";

type AppRoutesProps = {
  home: undefined;
  profile: undefined;
  history: undefined;
  exercise: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

const AppRoutes = () => {
  const { sizes, colors } = useTheme();

  const iconSize = sizes["6"];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.gray["300"],
        tabBarActiveTintColor: colors.green["500"],
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon width={iconSize} height={iconSize} fill={color} />,
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => <HistoryIcon width={iconSize} height={iconSize} fill={color} />,
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon width={iconSize} height={iconSize} fill={color} />,
        }}
      />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
};

export { AppRoutes };
