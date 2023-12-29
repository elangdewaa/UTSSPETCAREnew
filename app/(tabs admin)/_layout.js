import { Tabs } from "expo-router/tabs";
import { Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "all_reservation":
              iconName = "home-outline";
              break;
            case "Paket":
              iconName = "clipboard-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "white" : "brown"}
              borderRadius={20}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 }, 
        tabBarStyle: {
          height: 70,
          backgroundColor: "coral",
         
          
          
          
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text mb="$2" color={focused ? "$white" :"brown"} fontSize="$sm">
              {children}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="all_reservation" options={{ title: "All Reservation", ...noHead }} />
      <Tabs.Screen name="Paket" options={{ title: "Paket", ...noHead }} />
      <Tabs.Screen name="Profile_admin" options={{ title: "Profile", ...noHead }} />
    </Tabs>
  );
};

export default TabsLayout;