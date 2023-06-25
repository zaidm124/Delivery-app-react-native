import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category Name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image Of Category',
    }),
  ],
})
