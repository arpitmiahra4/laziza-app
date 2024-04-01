import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { rest } from "../Constant";
import MapView, { Marker } from "react-native-maps";
import { themeColors, useTheme } from "../theme";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import { selectRestaurant } from "../slices/Restaurant";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../slices/Cart";

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  // const restaurant = rest[0].restaurants[0];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { themeColors, toggleTheme } = useTheme();

  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.LNG,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.LNG,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              20-30 Minutes
            </Text>
            <Text className="mt-2 mb-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={{
              uri: "https://pngfreepic.com/wp-content/uploads/2022/04/Scooter-Delivery-boy-ride-scooter-motorcycle-vector-png.png?v=1663434941",
            }}
          />
        </View>
        <View
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={{
                uri: "https://t4.ftcdn.net/jpg/02/90/98/39/360_F_290983972_mYCCKvVWzmQUhNoWIdwjSdlPADb3Prf2.jpg",
              }}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Superman</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
