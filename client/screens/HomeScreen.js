import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { useTheme } from "../theme";
import Categories from "../components/Categories";
import { rest } from "../Constant";
import FeatureRow from "../components/FeatureRow";
import { Tooltip } from "react-native-elements";

export default function HomeScreen() {
  const { themeColors, toggleTheme } = useTheme();
  if (!themeColors) {
    // Handle the case where themeColors is not defined yet
    return null;
  }
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={"dark-content"} />
      {/* Search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={"25"} width={"20"} stroke={"gray"} />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin height={"20"} width={"20"} stroke="gray" />
            <Text className="text-gray-600">Indore, IND</Text>
          </View>
        </View>
        <Tooltip
          popover={<Text className="text-white font-bold">Theme Changer</Text>}
          backgroundColor={themeColors.bgColor(1)}
        >
          <TouchableOpacity onPress={toggleTheme}>
            <View
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="ml-2 p-3 rounded-full"
            >
              <Icon.Sliders
                height={"20"}
                width={"20"}
                strokeWidth={2.5}
                stroke={"white"}
              />
            </View>
          </TouchableOpacity>
        </Tooltip>
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />

        {/* res */}
        <View className="mt-5">
          {rest.map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
        <View className="mt-2 mb-10">
          {rest.map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
