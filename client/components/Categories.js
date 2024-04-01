import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { cardsData } from "../Constant";
import { useTheme } from "../theme";

export default function Categories() {
  const { themeColors } = useTheme();

  const [activeCat, setActiveCat] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {cardsData.map((category, index) => {
          let isActive = category.id == activeCat;

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCat(category.id)}
                style={{
                  padding: 6,
                  borderRadius: 50,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  backgroundColor: isActive
                    ? themeColors.bgColor(1)
                    : "#D1D5DB",
                }}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: category.imageUrl }}
                  className="rounded-full object-cover"
                />
              </TouchableOpacity>
              <Text
                className={`text-sm ${
                  isActive ? "font-semibold text-gray-800" : "text-gray-500"
                }`}
              >
                {category.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
