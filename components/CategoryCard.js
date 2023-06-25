import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({title,imgUrl}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image className="h-20 w-20 rounded" source={{
            uri:urlFor(imgUrl).url()
        }}/>
      <Text className="absolute left-1 bottom-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard