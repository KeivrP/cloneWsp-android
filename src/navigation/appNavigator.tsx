import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/* import NotImplementedScreen from "../screens/NotImplementedScreen";
import SettingsScreen from "../screens/SettingsScreen"; */

import { Ionicons, Entypo } from "@expo/vector-icons";
import ChatsScreen from "../screen/chats/ChatsScreen";
import { Platform, View } from "react-native";
import { TabBarIcon } from "../components/TabBarIcon";

const Tab = createBottomTabNavigator<RootBottomParamList>();


{ Platform.OS === 'ios' }

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Logo"
            screenOptions={{
                tabBarStyle: { backgroundColor: "whitesmoke" },
                headerStyle: { backgroundColor: "whitesmoke" },
            }}
        >
            <Tab.Screen
                name="Logo"
                component={ChatsScreen}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row'}}>
                            <Ionicons
                                onPress={() => navigation.navigate("Contacts")}
                                name="camera-outline"
                                size={20}
                                color={"royalblue"}
                                style={{ marginRight: 15 }}
                            />
                            <Ionicons
                                onPress={() => navigation.navigate("Contacts")}
                                name="search-sharp"
                                size={18}
                                color={"royalblue"}
                                style={{ marginRight: 15 }}
                            />
                            <Ionicons
                                onPress={() => navigation.navigate("Contacts")}
                                name='ellipsis-vertical'
                                size={18}
                                color={"royalblue"}
                                style={{ marginRight: 15 }}
                            />
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Status"
                component={ChatsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="logo-whatsapp" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calls"
                component={ChatsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call-outline" size={size} color={color} />
                    ),
                }}
            />
            {Platform.OS === 'ios' &&
                <Tab.Screen
                    name="Camera"
                    component={ChatsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="camera-outline" size={size} color={color} />
                        ),
                    }}
                />}
            <Tab.Screen
                name="Settings"
                component={ChatsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;