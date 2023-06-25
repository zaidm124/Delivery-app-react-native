import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ restaurants, title, description }) => {
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
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              title={restaurant.name}
              rating={restaurant.rating}
              address={restaurant.address}
              genre={restaurant.category?.name}
              imgUrl={restaurant.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
