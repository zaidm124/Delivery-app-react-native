import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type=="category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  console.log(categories);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      {categories?.map((category) => {
        return <CategoryCard title={category.name} imgUrl={category.image} />;
      })}
    </ScrollView>
  );
};

export default Categories;
