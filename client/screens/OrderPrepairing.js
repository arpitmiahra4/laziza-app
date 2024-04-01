import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function OrderPrepairing() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif",
        }}
        style={{ width:350, height: 300 }}
      />
    </View>
  );
}
