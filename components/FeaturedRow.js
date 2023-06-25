import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, featureCategory }) => {
  return (
    <View>
      <View className="flex-row mt-4 justify-between items-center px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          title={"Nando's"}
          rating={4.5}
          address={"123 Main St"}
          genre={"Others"}
          imgUrl="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
        />
        <RestaurantCard
          title={"Nando's"}
          rating={4.5}
          address={"123 Main St"}
          genre={"Others"}
          imgUrl="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
        />
        <RestaurantCard
          title={"Nando's"}
          rating={4.5}
          address={"123 Main St"}
          genre={"Others"}
          imgUrl="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
        />
        <RestaurantCard
          title={"Nando's"}
          rating={4.5}
          address={"123 Main St"}
          genre={"Others"}
          imgUrl="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
