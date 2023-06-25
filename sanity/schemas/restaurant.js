import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image Of Restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitute Of Restaurant',
    }),
    defineField({
      name: 'lon',
      type: 'number',
      title: 'Longitude of the Restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address of the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from 1-5 stars',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a value between 1 to 5"),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      validation:(Rule)=>Rule.required(),
      to:[{type:"category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      validation:(Rule)=>Rule.required(),
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
