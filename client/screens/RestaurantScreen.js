import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors, useTheme } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { setRestaurant } from "../slices/Restaurant";
import { useDispatch } from "react-redux";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();
  console.clear();
  const { themeColors, toggleTheme } = useTheme();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, []);
  return (
    <View>
      <CartIcon />
      <StatusBar style={"light"} />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={{ uri: item.image }} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-16 left-4 bg-gray-100 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1 overflow-hidden">
              <View className="flex-row items-center space-x-1">
                <Icon.Star
                  height={"12"}
                  width={"12"}
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
                <Icon.MapPin color={"gray"} height={"12"} width={"12"} />
                <Text className="text-gray-700 text-xs">
                  Nearby - {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 text-xs">
              {item.description}
            </Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={{ ...dish }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
