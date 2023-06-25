import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featureCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type=="featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
          category->,
      },
    }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featureCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://cdn271.picsart.com/c154b1bc-cc47-4551-88c8-8eedae878232/425074609027201.jpg?to=crop&type=webp&r=1008x1344&q=85",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput
            placeholderTextColor={"#808080"}
            placeholder="Restaurants and cuisine"
            style={{ width: "100%", outline: 0 }}
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color={"#00CCBB"} />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Features */}

        {featureCategories?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              restaurants={category.restaurants}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
