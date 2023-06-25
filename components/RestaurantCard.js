import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, GlobeAltIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({ rating, genre, address, imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 shadow">
      <Image
        className="h-36 w-64 rounded"
        source={{
          uri: imgUrl,
        }}
      />
      <View className="bg-white px-3 pb-4">
        <Text className="text-lg pt-2 font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <GlobeAltIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            <Text>
              {"Nearby"} . {address}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
