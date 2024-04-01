import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors, useTheme } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  const { themeColors, toggleTheme } = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.8),
          shadowRadius: 8,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg mb-2"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: item.image }}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star
              height={"16"}
              width={"16"}
              stroke="yellow"
              fill={"yellow"}
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) -{" "}
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color={"gray"} height={"15"} width={"15"} />
            <Text className="text-gray-700 text-xs">
              Nearby - {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
